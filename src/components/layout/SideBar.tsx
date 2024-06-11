import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { userRole } from '../../constants';
import { getCurrentToken } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';
import { adminPaths } from '../../routes/adminRoutes';
import { employeePaths } from '../../routes/employeeRoutes';
import { generalPaths } from '../../routes/generalRoutes';
import { managerPaths } from '../../routes/managerRoutes';
import { userPaths } from '../../routes/userRoutes';
import { TJwtPayloadUser } from '../../types';
import { sidebarItemsGenerator, verifyToken } from '../../utils';
import { generatePathsWithDropdown } from '../../utils/generatePathWithDropdown';
const { Sider } = Layout;

const SideBar = ({ collapsed }) => {
  const navigate = useNavigate();

  const token = useAppSelector(getCurrentToken);

  let user: TJwtPayloadUser;

  if (token) {
    user = verifyToken(token) as TJwtPayloadUser;
  }

  let sideBarItems;

  let newPath;

  switch (user!?.role) {
    case userRole.ADMIN || userRole.SUPER_ADMIN:
      newPath = generatePathsWithDropdown(
        adminPaths,
        ['test1', 'test2'],
        'products'
      );
      sideBarItems = sidebarItemsGenerator(newPath, userRole.ADMIN);
      break;

    case userRole.MANAGER:
      newPath = generatePathsWithDropdown(
        managerPaths,
        ['test1', 'test2'],
        'products'
      );
      sideBarItems = sidebarItemsGenerator(newPath, userRole.MANAGER);
      break;

    case userRole.EMPLOYEE:
      newPath = generatePathsWithDropdown(
        employeePaths,
        ['test1', 'test2'],
        'products'
      );
      sideBarItems = sidebarItemsGenerator(newPath, userRole.EMPLOYEE);
      break;

    case userRole.USER:
      newPath = generatePathsWithDropdown(
        userPaths,
        ['test1', 'test2'],
        'products'
      );
      sideBarItems = sidebarItemsGenerator(newPath, userRole.USER);
      break;

    default:
      newPath = generatePathsWithDropdown(
        generalPaths,
        ['test1', 'test2'],
        'products'
      );
      sideBarItems = sidebarItemsGenerator(newPath, null);
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
        onClick={() => navigate(`/${user.role}/home`)}
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
