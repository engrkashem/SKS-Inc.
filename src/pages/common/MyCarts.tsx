import { Flex } from 'antd';
import Loading from '../../components/ui/Loading';
import Cart from '../../components/ui/Products/Cart';
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
  // console.log(shoppingCarts, shoppingCartsData?.pagination);

  return (
    <Flex gap={8}>
      <div>
        {shoppingCarts?.map((item) => <Cart key={item._id} order={item} />)}
      </div>
      <div style={{ width: '40%', backgroundColor: 'red' }}>
        <h2>Order Summary</h2>
      </div>
    </Flex>
  );
}
