import { Button } from 'antd';
import { ReactNode } from 'react';

type TCustomButtonProp = {
  type?: string;
  icon?: ReactNode;
  iconPosition?: string;
  children: string;
  handler?: any;
};

export default function CustomButton({
  type,
  icon,
  iconPosition,
  children,
  handler,
}: TCustomButtonProp) {
  return (
    <Button
      onClick={handler && handler}
      type={type}
      icon={icon}
      iconPosition={iconPosition}
    >
      {children}
    </Button>
  );
}
