import API_ENDPOINTS from '@/services/apiEndpoints';
import { basicAxios } from '@/services/basicAxios';
import { readToken } from '@/utils/api';
import type { AxiosResponse } from 'axios';

export const showCart = async () => {
  const options = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${readToken()}`,
    },
  };
  const response: AxiosResponse<string> = await basicAxios(API_ENDPOINTS.get.SHOW_CART, options);
  return response.data;
};
