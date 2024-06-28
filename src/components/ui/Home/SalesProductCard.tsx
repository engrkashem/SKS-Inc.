import { Card, Col, Flex, Typography } from 'antd';
import { TProduct } from '../../../types';

const { Meta } = Card;
const { Text } = Typography;

type TSalesProductCardProps = {
  product: TProduct;
};

export default function SalesProductCard({ product }: TSalesProductCardProps) {
  const { name, img } = product;
  const price = Math.ceil(product.price);
  console.log(product);
  return (
    <Col span={6}>
      <Card hoverable cover={<img alt={name} src={img} />}>
        <Meta
          title={<Text>{name}</Text>}
          description={
            <Flex vertical>
              <Text style={{ fontSize: '1.3rem', color: '#d46b08' }}>
                {price}
              </Text>
              <Text type="secondary" delete>
                {price * 1.6}
              </Text>
            </Flex>
          }
        />
      </Card>
    </Col>
  );
}
