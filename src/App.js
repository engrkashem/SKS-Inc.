import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Shared/Navbar';
import Purchase from './Components/Purchase/Purchase';
import RequireAuth from './Components/Auth/RequireAuth';
import MyProfile from './Components/Dashboard/MyProfile/MyProfile';
import MyOrders from './Components/Dashboard/MyOrder/MyOrders';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import Payment from './Components/Dashboard/MyOrder/Payment';

function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/purchase/:id'
          element={<RequireAuth><Purchase /></RequireAuth>}>
        </Route>
        <Route path='/dashboard'
          element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='my-orders' element={<MyOrders />}>
            <Route path='payment/:id' element={<Payment />}></Route>
          </Route>
          <Route path='add-review' element={<AddReview />}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
