import Loading from '../../components/ui/Loading';
import { useGetMyShoppingCartsQuery } from '../../redux/features/order/orderApi';

export default function MyCarts() {
  const queryParams = [
    { name: 'limit', value: 10 },
    { name: 'page', value: 1 },
  ];

  const {
    data: shoppingCartsData,
    isLoading,
    isFetching,
  } = useGetMyShoppingCartsQuery(queryParams);

  if (isLoading || isFetching) return <Loading />;

  const shoppingCarts = shoppingCartsData?.data;
  console.log(shoppingCarts, shoppingCartsData?.pagination);

  return (
    <div>
      <h1>This is MyCarts page</h1>
    </div>
  );
}
