/**
 * API Endpoints
 * Write all the API endpoints here
 */

const API_ENDPOINTS = {
  get: { MEDICINE_DETAIL: (id: string) => `/medicine/${id}` ,
 SEARCH : (name: string) =>`/search/${name}`} , 
  post: {
    SIGNUP: '/auth/signup/',
    LOGIN: '/auth/login/',
    LOGOUT: '/auth/logout/',
  },
};

export default API_ENDPOINTS;
