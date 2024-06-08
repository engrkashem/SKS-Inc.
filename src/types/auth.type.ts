export type TJwtPayloadUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TAuthState = {
  user: null | TJwtPayloadUser;
  token: null | string;
};
