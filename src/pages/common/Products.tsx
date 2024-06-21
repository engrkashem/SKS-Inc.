import { Row } from 'antd';
import { useParams } from 'react-router-dom';
import Loading from '../../components/ui/Loading';
import ProductCard from '../../components/ui/Products/ProductCard';
import { useGetAllProductsQuery } from '../../redux/features/product/productApi';

export default function Products() {
  const { category } = useParams();

  const queryParams = [
    { name: 'category', value: category },
    { name: 'limit', value: 10 },
    { name: 'page', value: 1 },
  ];

  const {
    data: productsData,
    isLoading,
    isFetching,
  } = useGetAllProductsQuery(queryParams);
  // [{ name: 'category', value: category }]

  if (isLoading || isFetching) return <Loading />;

  const { products } = productsData;

  return (
    <div>
      <h1 className="page-heading">{category?.toUpperCase()}</h1>
      <Row justify="center" gutter={[16, 32]} style={{ marginTop: '30px' }}>
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>
    </div>
  );
}
