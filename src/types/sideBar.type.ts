import { ReactNode } from 'react';

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
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
