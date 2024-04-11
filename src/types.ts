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

export type _REVIEW = {
  rating: number;
  reviews: string;
};

export type _LOGIN_FORM = {
  email: string;
  password: string;
  username: string;
};

export type _SIGNUP_FORM = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
};

export type _ADDRESS = {
  street: string;
  city: string;
  state: string;
  pinCode: number;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  defaultAddress: boolean;
};

export type _UPDATE_ADDRESS = {
  addresses: _ADDRESS[];
};
