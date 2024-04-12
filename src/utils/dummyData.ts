import { _ADDRESS, _CART_ITEM, _MEDICINE, _ORDER, _USER, _TRANSACTION } from '@/types';

export const MEDICINE: _MEDICINE = {
  id: 123,
  displayImages:
    ['https://images.unsplash.com/photo-1618120508902-c8d05e7985ee?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
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
  defaultAddress: true,
  location: {
    type: 'Point',
    coordinates: [100, 34],
  },
};

const SECOND_ADDRESS: _ADDRESS = {
  street: 'Kufri',
  city: 'Shimla',
  state: 'Himachal Pradesh',
  pinCode: 175131,
  defaultAddress: false,
  location: {
    type: 'Point',
    coordinates: [234, 89],
  },
};

const THIRD_ADDRESS: _ADDRESS = {
  street: 'Mall Street',
  city: 'Kasol',
  state: 'Himachal Pradesh',
  pinCode: 175155,
  defaultAddress: false,
  location: {
    type: 'Point',
    coordinates: [122, 90],
  },
};

export const USER: _USER & {avatar:string} = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johnDoe',
  email: 'test@gmail.com',
  phoneNumber: 1234567890,
  addresses: [DEFAULT_ADDRESS, SECOND_ADDRESS, THIRD_ADDRESS],
  isStoreManager: false,
  isCEO: false,
  avatar: 'https://res.cloudinary.com/cinespace/image/upload/v1694361563/lhcq38zfjhqdityek6pc.png',
};

export const ORDER: _ORDER = {
  order_id: '1234567o',
  date: '12-04-2024',
  amount: 1234.56,
  status: 'Out for Delivery',
};

export const TRANSACTION: _TRANSACTION = {
  buyer: 'Praveen Kumar',

  order: { order_id: '1234567o', date: '12-04-2024', amount: 1234.56, status: 'Out for Delivery' },

  paymentId: '124123412',

  item: {
    id: 123,
    displayImages:
      ['https://images.unsplash.com/photo-1618120508902-c8d05e7985ee?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    name: 'Pure Vitamin-C Serum',
    category: 'Vitamin',
    price: 988,
  },
};
