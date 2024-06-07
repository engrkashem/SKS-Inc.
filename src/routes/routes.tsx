import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
