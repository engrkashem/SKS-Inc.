import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { routesGenerator } from '../utils/routesGenerator';
import { generalPaths } from './generalRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routesGenerator(generalPaths),
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
