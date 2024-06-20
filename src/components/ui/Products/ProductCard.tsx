import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Col, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import {
  getCurrentUser,
  setIsModalOpen,
} from '../../../redux/features/auth/authSlice';
import { useAddToCartMutation } from '../../../redux/features/order/orderApi';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { TCreateResponse, TOrder } from '../../../types';
import CustomImage from '../../customAntComponents/CustomImage';
import CustomButton from '../CustomButton';

export default function ProductCard({ product }) {
  // RTK hooks
  const user = useAppSelector(getCurrentUser);
  const dispatch = useAppDispatch();
  const [addToCart] = useAddToCartMutation();

  // cutting product name and description as per design needs
  const productName =
    product.name.length > 14 ? product.name.slice(0, 12) + '...' : product.name;

  const productDescription =
    product.description.length > 30
      ? product.description.slice(0, 30) + '...'
      : product.description;

  // handlers
  const handleBuyButton = async () => {
    if (!user) {
      toast.warning('To place an order, Login first');
      dispatch(setIsModalOpen(true));
    } else {
      const toastId = toast.loading('Product is being added to your cart');

      const addToCartData = {
        product: product._id,
        orderQty: 1,
      };

      try {
        const res = (await addToCart(addToCartData)) as TCreateResponse<TOrder>;

        console.log(res);

        if (res?.error) {
          toast.error(res?.error?.data?.message, {
            id: toastId,
          });
        } else {
          toast.success(res?.data?.message, { id: toastId });
        }
      } catch {
        toast.error('Something went wrong!', { id: toastId });
      }
    }
  };

  return (
    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
      <Card
        hoverable
        cover={<CustomImage src={product.img} />}
        style={{ height: 400 }}
      >
        <Link style={{ color: 'black' }} to={`${product._id}`}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
        </Link>
        <Flex
          style={{ marginTop: '20px' }}
          justify="space-between"
          align="center"
        >
          <h3 className="price theme-color">$ {product.price}</h3>

          <CustomButton
            handler={handleBuyButton}
            type="primary"
            icon={<ShoppingCartOutlined />}
            iconPosition="end"
          >
            Buy
          </CustomButton>
        </Flex>
      </Card>
    </Col>
  );
}
