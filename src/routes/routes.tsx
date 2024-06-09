import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { routesGenerator } from '../utils/routesGenerator';
import { adminPaths } from './adminRoutes';
import { employeePaths } from './employeeRoutes';
import { generalPaths } from './generalRoutes';
import { managerPaths } from './managerRoutes';
import { userPaths } from './userRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routesGenerator(generalPaths),
  },
  {
    path: '/user',
    element: <App />,
    children: routesGenerator(userPaths),
  },
  {
    path: '/employee',
    element: <App />,
    children: routesGenerator(employeePaths),
  },
  {
    path: '/manager',
    element: <App />,
    children: routesGenerator(managerPaths),
  },
  {
    path: '/admin',
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: '/about-us',
    element: <About />,
  },
  {
    path: '/contact-us',
    element: <Contact />,
  },
]);

export default router;
