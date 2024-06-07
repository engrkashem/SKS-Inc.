import { Layout } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import NavBarTop from './NavBarTop';
import SideBar from './SideBar';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar collapsed={collapsed} />
      <Layout>
        <NavBarTop collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: '#ffffff',
          }}
        >
          <Outlet />
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
