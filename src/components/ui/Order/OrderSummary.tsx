import { Button, Flex, Input, Space } from 'antd';
import { useGetMyShoppingCartsQuery } from '../../../redux/features/order/orderApi';

export default function OrderSummary() {
  const { data: shoppingCartsData } = useGetMyShoppingCartsQuery(undefined);

  const myShoppingCarts = shoppingCartsData.data;

  const subTotal = myShoppingCarts?.reduce(
    (prv, item) => prv + item.netAmount,
    0
  );
  const shippingCharge = 100;
  const total = subTotal + shippingCharge;

  return (
    <Flex
      vertical
      gap={20}
      style={{
        width: '40%',
        padding: '10px',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
      }}
    >
      <h2>Order Summary</h2>
      {/* order price except shipping charge and discount */}
      <Flex justify="space-between">
        <p>Subtotal ({myShoppingCarts.length} Item)</p>
        <p>
          $ <span>{subTotal}</span>
        </p>
      </Flex>
      {/* shipping charge */}
      <Flex justify="space-between">
        <p>Shipping Fee</p>
        <p>
          $ <span>{shippingCharge}</span>
        </p>
      </Flex>
      {/* discount coupon */}
      <Space.Compact style={{ width: '100%' }}>
        <Input placeholder="Enter Voucher Coupon" />
        <Button
          style={{
            backgroundColor: '#1890ff',
            color: 'white',
            fontWeight: '600',
          }}
        >
          Apply
        </Button>
      </Space.Compact>
      {/* Total amount after discount */}
      <Flex
        justify="space-between"
        style={{ fontSize: '1rem', fontWeight: '600' }}
      >
        <p>Total</p>
        <p>
          $ <span>{total}</span>
        </p>
      </Flex>
      <Button type="primary" block>
        Proceed
      </Button>
    </Flex>
  );
}
