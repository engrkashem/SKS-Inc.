import {
  HomeOutlined,
  PhoneOutlined,
  ProductOutlined,
  UserOutlined,
} from '@ant-design/icons';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Products from '../pages/common/Products';
import Profile from '../pages/common/Profile';
import UpdateProfile from '../pages/common/UpdateProfile';
import { TUserPath } from '../types';

export const commonPaths: TUserPath[] = [
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
  },
  {
    path: 'products/:category',
    element: <Products />,
  },
  {
    name: 'About',
    path: 'about',
    icon: <UserOutlined />,
    element: <About />,
  },
  {
    name: 'Contact',
    path: 'contact-us',
    icon: <PhoneOutlined />,
    element: <Contact />,
  },
  {
    path: 'update-profile',
    element: <UpdateProfile />,
  },
  {
    path: 'my-profile',
    element: <Profile />,
  },
];
