import { useParams } from 'react-router-dom';

export default function ProductByCategory() {
  const { category } = useParams();
  return (
    <div>
      <h1>This is ProductByCategory {category} page</h1>
    </div>
  );
}
