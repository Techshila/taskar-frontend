import API_ENDPOINTS from '@/services/apiEndpoints';
import { _USER_REGISTER_FORM } from '@/types';
import type { AxiosResponse } from 'axios';
import { basicAxios } from '@/services/basicAxios';
export async function signup(userData: _USER_REGISTER_FORM) {
  const response: AxiosResponse = await basicAxios(API_ENDPOINTS.post.SIGNUP, {
    method: 'POST',
    data: userData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.data;
}
