export type _MEDICINE = {
  id: number;
  displayImages: [string];
  name: string;
  category: string;
  price: number;
};

export type _MEDICINE_DETAILS = {
  id: number;
  name: string;
  categories: [string];
  price: number;
  description: string;
  displayImages: [string];
};

export type _LOGIN_DATA = {
  email: string;
  password: string;
};

export type _USER_REGISTER_FORM = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: number;
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

export type _USER = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: number;
  addresses: _ADDRESS[];
  isStoreManager: boolean;
  isCEO: boolean;
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

export type _TRANSACTION = {
  buyer: string;
  order: _ORDER;
  paymentId: string;
  item: _MEDICINE;
};



export type _CART_NEW = {
  "mediids": [string],
"medinames": [string],
"price": [string],
"qts": [number],
"userId": string,
"totalcnt": number,
"totalmoney": number
}