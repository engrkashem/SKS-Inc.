import { Button } from 'antd';
import { TProfileMenuItem } from '../types';

export const dropDownLinkGenerator = (profileMenuItems: TProfileMenuItem[]) => {
  return profileMenuItems.map((item) => ({
    key: item.label,
    label: (
      <Button
        onClick={item?.handler && item.handler}
        type={item?.type}
        style={item?.style}
      >
        {item.label}
      </Button>
    ),
  }));
};
