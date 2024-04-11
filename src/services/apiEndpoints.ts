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
  },
  post: {
    SIGNUP: '/user/signup/',
    LOGIN: '/user/login/',
    LOGOUT: '/user/logOut/',
    REVIEW: (id: string) => `/user/createreview/${id}`,
  },
};

export default API_ENDPOINTS;
