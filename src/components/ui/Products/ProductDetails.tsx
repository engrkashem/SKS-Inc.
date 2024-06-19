import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../../redux/features/product/productApi';
import Loading from '../Loading';

export default function ProductDetails() {
  const { productId } = useParams();

  const {
    data: productData,
    isLoading,
    isFetching,
  } = useGetProductQuery(productId, {
    skip: !productId,
  });

  if (isLoading || isFetching) return <Loading />;

  const { data: product, links } = productData;

  return (
    <div>
      <h1 className="page-heading">{product.name.toUpperCase()}</h1>
    </div>
  );
}
