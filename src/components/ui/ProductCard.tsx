import { Card, Col } from 'antd';
import CustomImage from '../customAntComponents/CustomImage';

export default function ProductCard({ product }) {
  //   console.log(product);
  return (
    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
      <Card
        hoverable
        cover={<CustomImage src={product.img} />}
        style={{ height: 400 }}
      >
        <h1>{product.name}</h1>
      </Card>
    </Col>
  );
}
