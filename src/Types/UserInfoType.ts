export type UserInfoType = {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
  delivery?: DeliveryStatusDTO[];
};

type DeliveryStatusDTO = {
  id: string;
  trackCode: string;
  status: string;
  createdOn: Date;
  productId: string;
};
