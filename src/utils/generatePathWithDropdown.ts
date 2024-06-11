import { TUserPath } from '../types';

export const generatePathsWithDropdown = (
  paths: TUserPath[],
  subItem: string[],
  pathFilter: string
) => {
  const newPath = paths?.map((item) => {
    if (item.path === pathFilter) {
      return {
        ...item,
        subItem,
      };
    }
    return item;
  });

  return newPath;
};
