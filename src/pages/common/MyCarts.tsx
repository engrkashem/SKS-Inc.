import { Flex } from 'antd';
import Loading from '../../components/ui/Loading';
import OrderSummary from '../../components/ui/Order/OrderSummary';
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
    <Flex gap={10} style={{ backgroundColor: '#f5f5f5', padding: '5px' }}>
      <div>
        {shoppingCarts?.map((item) => <Cart key={item._id} order={item} />)}
      </div>
      <OrderSummary />
    </Flex>
  );
}
