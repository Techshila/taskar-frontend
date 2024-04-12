import API_ENDPOINTS from '@/services/apiEndpoints';
import { basicAxios } from '@/services/basicAxios';
import type { AxiosResponse } from 'axios';

export const search = async (name: string) => {
  const response: AxiosResponse<string> = await basicAxios(API_ENDPOINTS.get.SEARCH(name));
  return response.data;
};
