import { useParams } from 'react-router-dom';

export default function Products() {
  const { category } = useParams();
  return (
    <div>
      <h1>This is {category} Products page</h1>
    </div>
  );
}
