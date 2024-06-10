import { HomeOutlined, ProductOutlined } from '@ant-design/icons';
import Home from '../pages/Home';
import Products from '../pages/general/Products';

export const generalPaths = [
  {
    name: 'Home',
    path: 'home',
    element: <Home />,
    icon: <HomeOutlined />,
  },
  {
    name: 'Products',
    path: 'products',
    icon: <ProductOutlined />,
    subItem: ['test1', 'test2'],
  },
  {
    path: 'products/:category',
    element: <Products />,
  },
];
