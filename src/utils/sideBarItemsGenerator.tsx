import { NavLink } from 'react-router-dom';
import { TSideBarItem, TUserPath } from '../types';

export const sidebarItemsGenerator = (
  items: TUserPath[],
  role: string,
  icon = null
) => {
  const sideBarItems = items.reduce((acc: TSideBarItem[], item) => {
    if (item?.path && item?.name) {
      acc.push({
        key: item.name,
        icon: item.icon,
        label: item?.subItem ? (
          <p>{item.name}</p>
        ) : role ? (
          <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
        ) : (
          <NavLink to={`${item.path}`}>{item.name}</NavLink>
        ),
        children: item?.subItem?.map((sItem) => ({
          key: sItem,
          label: role ? (
            <NavLink to={`/${role}/${item.path}/${sItem}`}>{sItem}</NavLink>
          ) : (
            <NavLink to={`${item.path}/${sItem}`}>{sItem}</NavLink>
          ),
        })),
      });
    }

    if (item?.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              icon: child.icon,
              label: role ? (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ) : (
                <NavLink to={`${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sideBarItems;
};
