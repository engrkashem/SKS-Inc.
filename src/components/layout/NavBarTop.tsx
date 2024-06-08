import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Space } from 'antd';
import { useState } from 'react';
import logo from '../../assets/react.svg';
import { getCurrentUser, logout } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import INVModal from '../Form/INVModal';
const { Header, Sider, Content } = Layout;

const NavBarTop = ({ collapsed, setCollapsed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('Login');
  const dispatch = useAppDispatch();

  // get current logged in user if available
  const user = useAppSelector(getCurrentUser);

  // click handlers
  const handleLogout = () => {
    dispatch(logout());
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
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          {/* <Button>Hello</Button> */}
          <img style={{ height: '20px' }} src={logo} alt="" srcSet="" />
        </div>
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
