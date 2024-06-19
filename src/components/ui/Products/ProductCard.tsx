import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Col, Flex } from 'antd';
import CustomImage from '../../customAntComponents/CustomImage';
import CustomButton from '../CustomButton';

export default function ProductCard({ product }) {
  // cutting product name and description as per design needs
  const productName =
    product.name.length > 14 ? product.name.slice(0, 12) + '...' : product.name;

  const productDescription =
    product.description.length > 30
      ? product.description.slice(0, 30) + '...'
      : product.description;

  return (
    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
      <Card
        hoverable
        cover={<CustomImage src={product.img} />}
        style={{ height: 400 }}
      >
        <div>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
        </div>
        <Flex
          style={{ marginTop: '20px' }}
          justify="space-between"
          align="center"
        >
          <h3 className="price theme-color">$ {product.price}</h3>

          <CustomButton
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
