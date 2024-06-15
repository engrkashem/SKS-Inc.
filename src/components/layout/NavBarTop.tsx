import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Dropdown,
  Input,
  Layout,
  MenuProps,
  Space,
} from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { THEME_ORANGE_COLOR } from '../../constants';
import { getCurrentUser, logout } from '../../redux/features/auth/authSlice';
import { useGetMeQuery } from '../../redux/features/user/userApi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { TProfileMenuItem } from '../../types';
import { dropDownLinkGenerator } from '../../utils';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import INVModal from '../Form/INVModal';
import SearchBox from '../ui/NavBar/SearchBox';
const { Header, Sider, Content } = Layout;
const { Search } = Input;

const NavBarTop = ({ collapsed, setCollapsed }) => {
  // Local react hooks
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('Login');
  const navigate = useNavigate();

  // redux rtk hooks
  const dispatch = useAppDispatch();

  // get current logged in user if available
  const user = useAppSelector(getCurrentUser);

  // get information of current user
  const { data: userInfo } = useGetMeQuery(undefined, { skip: !user?._id });

  // Logout handlers
  const handleLogout = () => {
    dispatch(logout());
    navigate('/home');
  };

  // Login and Register Click handlers to manage modal
  const handleAuthButtonClick = (title) => {
    setModalText(title);
    setIsModalOpen(true);
  };

  // Modal close handler
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const profileMenuItems: TProfileMenuItem[] = [
    {
      label: `Mr. ${userInfo?.name?.lastName}`,
      handler: handleLogout,
      style: {
        color: THEME_ORANGE_COLOR,
        fontSize: '1.3rem',
        fontWeight: '900',
      },
      type: 'link',
    },
    {
      label: `Update Profile`,
      style: { color: THEME_ORANGE_COLOR, fontWeight: '500' },
      type: 'link',
    },
    {
      label: `Logout`,
      handler: handleLogout,
      style: { color: THEME_ORANGE_COLOR, fontWeight: '500' },
      type: 'link',
    },
  ];

  const items: MenuProps['items'] = dropDownLinkGenerator(profileMenuItems);

  // decide what to render in navbar
  let content;

  if (user?._id) {
    content = (
      <>
        <Dropdown menu={{ items }} placement="bottomRight">
          {userInfo?.profilePic ? (
            <Avatar src={<img src={userInfo?.profilePic} alt="avatar" />} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
        </Dropdown>
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
        {/* Collapse button to manage sidebar  */}
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

        {/* Search box component  */}
        <SearchBox />

        {/*  content to render  */}
        <Space>{content}</Space>
      </Header>
      {/* Model Component render  */}
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
