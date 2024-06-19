import { Button } from 'antd';
import { ReactNode } from 'react';

type TCustomButtonProp = {
  type?: string;
  icon?: ReactNode;
  iconPosition?: string;
  children: string;
};

export default function CustomButton({
  type,
  icon,
  iconPosition,
  children,
}: TCustomButtonProp) {
  return (
    <Button type={type} icon={icon} iconPosition={iconPosition}>
      {children}
    </Button>
  );
}
