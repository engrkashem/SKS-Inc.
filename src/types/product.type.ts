export type TProduct = {
  _id: string;
  name: string;
  qty: number;
  price: number;
  img: string;
  description: string;
  manufacturer: string;
  isDeleted: boolean;
  updatedAt?: string;
  createdAt?: string;
  category: string;
};

export type TAllProductsResponse = {
  products: TProduct[];
  categories: string[];
};
