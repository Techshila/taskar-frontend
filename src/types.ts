export type _MEDICINE = {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
};

export type _MEDICINE_DETAILS = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  stock: number;
};

export type _LOGIN_DATA = {
  email: string;
  password: string;
};

export type _USER_DETAILS = {
  email: string;
  is_admin: boolean;
  is_superuser: boolean;
};
