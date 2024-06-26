import { Row } from 'antd';
import { useGetAllProductsQuery } from '../../../redux/features/product/productApi';
import Loading from '../Loading';
import SalesProductCard from './SalesProductCard';

export default function SalesProducts() {
  const { data: allProductsData, isLoading } =
    useGetAllProductsQuery(undefined);

  if (isLoading) return <Loading />;

  const { products } = allProductsData;

  const shuffledProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <div className="container">
      <h1>Flash Sale</h1>
      <Row gutter={8}>
        {shuffledProducts.map((product) => (
          <SalesProductCard key={product._id} product={product} />
        ))}
      </Row>
    </div>
  );
}
