import { HomeOutlined } from '@ant-design/icons';
import Home from '../pages/Home';
import { commonPaths } from './commonRoutes';

export const userPaths = [
  {
    path: '',
    element: <Home />,
    icon: <HomeOutlined />,
  },
  ...commonPaths,
];
