import { _ADDRESS, _CART_ITEM, _MEDICINE, _USER } from '@/types';

export const MEDICINE: _MEDICINE = {
  id: 123,
  image:
    'https://images.unsplash.com/photo-1618120508902-c8d05e7985ee?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: 'Pure Vitamin-C Serum',
  category: 'Vitamin',
  price: 988,
};

export const CART_ITEM: _CART_ITEM = {
  image:
    'https://images.unsplash.com/photo-1618120508902-c8d05e7985ee?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: 'Pure Vitamin-C Serum',
  count: 2,
  price: 988,
};

const DEFAULT_ADDRESS: _ADDRESS = {
  street: 'Mall Road',
  city: 'Manali',
  state: 'Himachal Pradesh',
  pinCode: 185131,
  defaultaddress: true,
};

const SECOND_ADDRESS: _ADDRESS = {
  street: 'Kufri',
  city: 'Shimla',
  state: 'Himachal Pradesh',
  pinCode: 175131,
  defaultaddress: false,
};

const THIRD_ADDRESS: _ADDRESS = {
  street: 'Mall Street',
  city: 'Kasol',
  state: 'Himachal Pradesh',
  pinCode: 175155,
  defaultaddress: false,
};

export const USER: _USER = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johnDoe',
  email: 'test@gmail.com',
  phoneNumber: 1234567890,
  addresses: [DEFAULT_ADDRESS, SECOND_ADDRESS, THIRD_ADDRESS  ],
  isStoreManager: false,
  isCEO: false,
  avatar: 'https://res.cloudinary.com/cinespace/image/upload/v1694361563/lhcq38zfjhqdityek6pc.png',
};
