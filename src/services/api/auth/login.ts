import { _LOGIN_DATA } from '@/types';
import type { AxiosResponse } from 'axios';
import API_ENDPOINTS from '@/services/apiEndpoints';
import { basicAxios } from '@/services/basicAxios';

export async function login(userData: _LOGIN_DATA) {
  console.log('userData', userData);
  const response: AxiosResponse = await basicAxios(API_ENDPOINTS.post.LOGIN, {
    method: 'POST',
    data: userData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.data;
}
