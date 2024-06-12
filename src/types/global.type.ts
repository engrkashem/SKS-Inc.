export type TError = {
  data?: {
    message: string;
    success: boolean;
    stack: string;
  };
  status?: number;
};

export type TPagination = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TLinks = {
  [index: string]: string;
};

export type TResponse<T> = {
  status?: number;
  data?: T;
  error?: TError;
  message: string;
  success: boolean;
  pagination?: TPagination;
  links: TLinks;
};

export type TKeyValuePair = {
  [index: string]: any;
};

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};
