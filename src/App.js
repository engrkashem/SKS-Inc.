import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
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
