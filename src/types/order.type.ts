export type TOrder = {
  buyer: string;
  product: string;
  orderQty: number;
  orderAmount: number;
  netAmount: number;
  discount: number;
  isCancelled: boolean;
  isDelivered: boolean;
  isPaymentOk: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
};
