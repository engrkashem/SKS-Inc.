import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Checkbox, Flex, Input } from 'antd';
import { useState } from 'react';

export default function Cart({ order }) {
  const [orderQty, setOrderQty] = useState(Number(order?.orderQty) || 0);
  const [orderPrice, setOrderPrice] = useState(
    Math.ceil(Number(order?.product?.price) * orderQty) || 0
  );
  const { product } = order;
  const { name, img, description, price } = product;
  //   console.log({ product });
  // console.log({ order });

  //   event handlers
  const handleOrderQtyChange = () => {
    setOrderPrice(Math.ceil(orderQty * Number(price)));
  };

  const handleOrderQtyChangeButton = async (num) => {
    let newQty;
    await setOrderQty((prev) => {
      newQty = prev + num;
      newQty = newQty >= 0 ? newQty : 0;
      return newQty;
    });
    setOrderPrice(Math.ceil(newQty * Number(price)));
  };

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
        $ <span>{orderPrice}</span>
      </span>

      <Input
        onChange={(e) => setOrderQty(Number(e.target.value))}
        onPressEnter={handleOrderQtyChange}
        style={{ width: '20%' }}
        addonBefore={
          <PlusOutlined
            onClick={() => {
              handleOrderQtyChangeButton(1);
            }}
          />
        }
        addonAfter={
          <MinusOutlined
            onClick={() => {
              handleOrderQtyChangeButton(-1);
            }}
          />
        }
        value={orderQty}
      />
    </Flex>
  );
}
