import API_ENDPOINTS from '@/services/apiEndpoints';
import { basicAxios } from '@/services/basicAxios';
import { readToken } from '@/utils/api';
import type { AxiosResponse } from 'axios';

export const addToCart = async (medicineId: string) => {
  const options = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${readToken()}`,
    },
    params: {
      id: medicineId,
    },
  };
  const response: AxiosResponse<string> = await basicAxios(API_ENDPOINTS.get.ADD_TO_CART, options);
  return response.data;
};
