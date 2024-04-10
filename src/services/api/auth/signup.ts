import API_ENDPOINTS from '@/services/apiEndpoints';
import { _LOGIN_DATA } from '@/types';
import type { AxiosResponse } from 'axios';
import { basicAxios } from '@/services/basicAxios';

export async function signup(userData: _LOGIN_DATA) {
  const response: AxiosResponse = await basicAxios(API_ENDPOINTS.post.SIGNUP, {
    method: 'POST',
    data: userData,
  });
  return response.data;
}
