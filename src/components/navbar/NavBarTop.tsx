import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import logo from '../../assets/react.svg';
const { Header, Sider, Content } = Layout;

const NavBarTop = ({ collapsed, setCollapsed }) => {
  return (
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
      <Button>Login</Button>
    </Header>
  );
};

export default NavBarTop;
