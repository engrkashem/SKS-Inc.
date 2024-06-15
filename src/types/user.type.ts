export type TAddress = {
  country: string;
  district: string;
  division: string;
  street: string;
};

export type TName = {
  firstName: string;
  lastName: string;
  middleName?: string;
};

export type TUser = {
  _id: string;
  email: string;
  profilePic?: string;
  role: string;
  isDeleted: boolean;
  isGoogleAuthenticated: boolean;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  address?: TAddress;
  contactNo?: string;
  gender?: string;
  name?: TName;
  fullName?: string;
};
