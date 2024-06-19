import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Card, Col, Flex } from 'antd';
import CustomImage from '../customAntComponents/CustomImage';

export default function ProductCard({ product }) {
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
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            iconPosition="end"
          >
            Buy
          </Button>
        </Flex>
      </Card>
    </Col>
  );
}
