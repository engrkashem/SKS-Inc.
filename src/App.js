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
import AddTool from './Components/Dashboard/AddTool/AddTool';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Components/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageTools from './Components/Dashboard/ManageTools/ManageTools';
import RequireAdmin from './Components/Auth/RequireAdmin';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import { useQuery } from 'react-query';
import Loader from './Components/Shared/Loader';
import { createContext } from 'react';

export const ToolsContext = createContext()

function App() {

  //Loading Tools from server 
  const { data: tools, isLoading, refetch } = useQuery('sixTools', () => {
    // const url = `http://localhost:5000/tools`;
    const url = `https://agile-badlands-34653.herokuapp.com/tools`;
    return fetch(url)
      .then(res => res.json())
  });

  if (isLoading) {
    return <Loader></Loader>
  }

  return (
    <ToolsContext.Provider value={{ tools, refetch }}>
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
            <Route path='add-tool' element={<RequireAdmin><AddTool /></RequireAdmin>}></Route>
            <Route path='make-admin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
            <Route path='manage-all-orders' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
            <Route path='manage-tools' element={<RequireAdmin><ManageTools /></RequireAdmin>}></Route>
          </Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/portfolio' element={<MyPortfolio />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </ToolsContext.Provider>
  );
}

export default App;
