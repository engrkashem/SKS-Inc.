import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Checkbox, Flex, Input } from 'antd';

export default function Cart({ order }) {
  const { product, orderQty } = order;
  const { name, img, description, price } = product;
  console.log({ product });
  console.log({ order });
  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        backgroundColor: '#ffffff',
        padding: '10px',
        marginBottom: '5px',
        borderRadius: '5px',
      }}
    >
      <Flex gap={8}>
        <Checkbox />
        <Avatar
          shape="square"
          size={64}
          src={<img src={img} alt={`${name} picture`} />}
        />
      </Flex>
      <div style={{ width: '50%' }}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <span style={{ fontWeight: '600', fontSize: '1.5em' }}>
        $ <span>{price}</span>
      </span>

      <Input
        style={{ width: '20%' }}
        addonBefore={<PlusOutlined />}
        addonAfter={<MinusOutlined />}
        defaultValue={orderQty}
      />
    </Flex>
  );
}
