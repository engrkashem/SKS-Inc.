import { HomeOutlined } from '@ant-design/icons';
import Home from '../pages/Home';
import { commonPaths } from './commonRoutes';

export const managerPaths = [
  {
    path: '',
    element: <Home />,
    icon: <HomeOutlined />,
  },
  ...commonPaths,
];
