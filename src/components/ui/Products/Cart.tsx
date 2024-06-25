import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Checkbox, Flex, Input } from 'antd';
import { useState } from 'react';
import { toast } from 'sonner';
import { useUpdateOrderQtyMutation } from '../../../redux/features/order/orderApi';
import { TCreateResponse, TOrder } from '../../../types';

export default function Cart({ order }) {
  // local state/hook
  const [orderQty, setOrderQty] = useState(Number(order?.orderQty) || 0);

  // RTK hooks
  const [updateOrderQty] = useUpdateOrderQtyMutation();

  // data destructuring
  const { product, netAmount } = order;
  const { name, img, description, price } = product;

  //   event handlers
  const handleOrderQtyChange = async () => {
    const toastId = toast.loading('Product is being added to your cart');

    try {
      const res = (await updateOrderQty({
        orderId: order._id,
        data: { orderQty },
      })) as TCreateResponse<TOrder>;

      if (res?.error) {
        toast.error(res?.error?.data?.message, {
          id: toastId,
        });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch {
      toast.error('failed to update order quantity', { id: toastId });
    }
  };

  const handleOrderQtyChangeButton = async (num) => {
    const toastId = toast.loading('Product is being added to your cart');

    let newQty;
    await setOrderQty((prev) => {
      newQty = prev + num;
      newQty = newQty >= 0 ? newQty : 0;
      return newQty;
    });

    try {
      const res = (await updateOrderQty({
        orderId: order._id,
        data: { orderQty: newQty },
      })) as TCreateResponse<TOrder>;

      if (res?.error) {
        toast.error(res?.error?.data?.message, {
          id: toastId,
        });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch {
      toast.error('failed to update order quantity', { id: toastId });
    }
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
        $ <span>{netAmount}</span>
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
