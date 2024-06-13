import { Button, Input, Layout, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import INVModal from '../Form/INVModal';
import CollapseButton from '../ui/NavBar/CollapseButton';
import SearchBox from '../ui/NavBar/SearchBox';
const { Header, Sider, Content } = Layout;
const { Search } = Input;

const NavBarTop = ({ collapsed, setCollapsed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('Login');
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  // get current logged in user if available
  const user = useAppSelector(getCurrentUser);

  // click handlers
  const handleLogout = () => {
    dispatch(logout());
    navigate('/home');
  };

  const handleAuthButtonClick = (title) => {
    setModalText(title);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // decide what to render in navbar
  let content;

  if (user?._id) {
    content = (
      <>
        <Button onClick={handleLogout}>Logout</Button>
      </>
    );
  } else {
    content = (
      <>
        <Button onClick={() => handleAuthButtonClick('Login')}>Login</Button>
        <Button onClick={() => handleAuthButtonClick('Register')}>
          Register
        </Button>
      </>
    );
  }

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          alignItems: 'center',
        }}
      >
        <CollapseButton collapsed={collapsed} setCollapsed={setCollapsed} />

        <SearchBox />

        <Space>{content}</Space>
      </Header>
      <INVModal
        title={modalText}
        isModalOpen={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {modalText === 'Login' ? (
          <Login setIsModalOpen={setIsModalOpen} />
        ) : (
          <Register setIsModalOpen={setIsModalOpen} />
        )}
      </INVModal>
    </>
  );
};

export default NavBarTop;
