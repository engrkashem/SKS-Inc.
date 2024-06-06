import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import { useState } from 'react';
import logo from '../../assets/react.svg';
import ModalComponent from '../Modal/ModalComponent';
const { Header, Sider, Content } = Layout;

const NavBarTop = ({ collapsed, setCollapsed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        <Button onClick={showModal}>Login</Button>
      </Header>
      <ModalComponent
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
};

export default NavBarTop;
