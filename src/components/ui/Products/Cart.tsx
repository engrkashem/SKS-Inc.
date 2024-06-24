import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Checkbox, Flex, Input } from 'antd';
import { useState } from 'react';

export default function Cart({ order }) {
  const [orderQty, setOrderQty] = useState(Number(order?.orderQty) || 0);
  const { product } = order;
  const { name, img, description, price } = product;
  //   console.log({ product });
  // console.log({ order });
  console.log(orderQty);

  //   event handlers
  const handleOrderQtyChange = () => {
    console.log('from handleOrderQtyChange', orderQty);
  };

  const handleOrderQtyChangeButton = async (num) => {
    let newNum;
    await setOrderQty((prev) => {
      newNum = prev + num;
      newNum = newNum >= 0 ? newNum : 0;
      return newNum;
    });
    console.log('from handleOrderQtyChangeButton', newNum);
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
        $ <span>{price}</span>
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
