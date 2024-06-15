import { ReactNode } from 'react';

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
  subItem?: string[];
};

export type TSideBarItem =
  | {
      key: string;
      label: ReactNode;
      icon?: ReactNode;
      children?: TSideBarItem[];
    }
  | undefined;

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TProfileMenuItem = {
  label: string;
  handler?: any;
  style?: Record<string, string>;
  type?: string;
};
