import API_ENDPOINTS from '@/services/apiEndpoints';
import { basicAxios } from '@/services/basicAxios';
import { _ADDRESS, _UPDATE_ADDRESS } from '@/types';
import { readToken } from '@/utils/api';
import type { AxiosResponse } from 'axios';

export const getAddress = async () => {
  const options = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${readToken()}`,
    },
  };
  const response: AxiosResponse<string> = await basicAxios(API_ENDPOINTS.get.GET_ADDRESS, options);
  return response.data;
};

export const updateAddress = async (formData: _UPDATE_ADDRESS) => {
  const options = {
    body: formData,
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${readToken()}`,
      'Content-Type': 'multipart/form-data',
    },
  };
  const response: AxiosResponse<string> = await basicAxios(API_ENDPOINTS.post.UPDATE_ADDRESS, options);
  return response.data;
};
