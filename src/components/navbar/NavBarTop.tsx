import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
const { Header, Sider, Content } = Layout;

const NavBarTop = ({ collapsed, setCollapsed }) => {
  return (
    <Header style={{ padding: 0, background: '#ffffff' }}>
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
    </Header>
  );
};

export default NavBarTop;
