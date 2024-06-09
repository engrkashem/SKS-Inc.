import { HomeOutlined, ProductOutlined } from '@ant-design/icons';
import Home from '../pages/Home';
import Products from '../pages/general/Products';

export const generalPaths = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
    icon: <HomeOutlined />,
  },
  {
    name: 'Products',
    path: '/products',
    element: <Products />,
    icon: <ProductOutlined />,
  },
];
