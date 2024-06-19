import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { productId } = useParams();
  return (
    <div>
      <h1>This is ProductDetails page of {productId}</h1>
    </div>
  );
}
