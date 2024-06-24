import { Button, Flex, Input, Space } from 'antd';

export default function OrderSummary() {
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
        <p>Subtotal (1 Item)</p>
        <p>
          $ <span>700</span>
        </p>
      </Flex>
      {/* shipping charge */}
      <Flex justify="space-between">
        <p>Shipping Fee</p>
        <p>
          $ <span>100</span>
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
          $ <span>1000</span>
        </p>
      </Flex>
      <Button type="primary" block>
        Proceed
      </Button>
    </Flex>
  );
}
