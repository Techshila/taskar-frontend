/**
 * API Endpoints
 * Write all the API endpoints here
 */

const API_ENDPOINTS = {
  get: {
    MEDICINE_DETAIL: (id: string) => `/medicine/${id}`,
    SHOW_CART: '/user/cartshow/',
    ADD_TO_CART: '/user/cart/',
    HOME_MEDICINE: '/home/',
    SEARCH: (name: string) => `/search/${encodeURIComponent(name)}`,
    GET_ADDRESS: '/address/',
  },
  post: {
    SIGNUP: '/user/registerUser/',
    LOGIN: '/user/logInUser/',
    LOGOUT: '/user/logOut/',
    REVIEW: (id: string) => `/user/createreview/${id}`,
    UPDATE_ADDRESS: '/address/',
    GET_USER: '/user/updateUser'
  },
};

export default API_ENDPOINTS;
