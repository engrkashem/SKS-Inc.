import { HomeOutlined, ProductOutlined } from '@ant-design/icons';
import Home from '../pages/Home';
import ProductByCategory from '../pages/general/ProductByCategory';
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
    element: <Products />,
    icon: <ProductOutlined />,
    subItem: ['test1', 'test2'],
  },
  {
    path: 'products/:category',
    element: <ProductByCategory />,
  },
];
