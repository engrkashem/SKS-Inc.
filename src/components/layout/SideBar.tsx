import { Layout, Menu } from 'antd';
import { userRole } from '../../constants';
import { getCurrentToken } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';
import { generalPaths } from '../../routes/generalRoutes';
import { TJwtPayloadUser } from '../../types';
import { sidebarItemsGenerator, verifyToken } from '../../utils';
const { Sider } = Layout;

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [
//     getItem('Team 1', '6'),
//     getItem('Team 2', '8'),
//   ]),
//   getItem('Files', '9', <FileOutlined />),
// ];

const SideBar = ({ collapsed }) => {
  const token = useAppSelector(getCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token) as TJwtPayloadUser;
  }

  let sideBarItems;

  switch (user!?.role) {
    case userRole.ADMIN || userRole.SUPER_ADMIN:
      sideBarItems = null;
      break;

    case userRole.MANAGER:
      sideBarItems = null;
      break;

    case userRole.EMPLOYEE:
      sideBarItems = null;
      break;

    case userRole.USER:
      sideBarItems = null;
      break;

    default:
      sideBarItems = sidebarItemsGenerator(generalPaths, null);
      break;
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
    >
      <div
        style={{
          color: 'white',
          height: '4rem',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
        }}
      >
        Inventory Management
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default SideBar;
