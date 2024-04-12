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

export type _CART_ITEM = {
  image: string;
  name: string;
  count: number;
  price: number;
};

export type _LOCATION = {
  latitude: null | number;
  longitude: null | number;
};

export type _ORDER = {
  order_id: string;
  date: string;
  amount: number;
  status: string;
};
