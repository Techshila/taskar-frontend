import API_ENDPOINTS from '@/services/apiEndpoints';
import { basicAxios } from '@/services/basicAxios';
import type { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';

export const getUser = async () => {
    const [cookies] = useCookies(['token']);
  const options = {
    method: 'POST',
    data: {},
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${cookies.token}`,
      'Content-Type': 'multipart/form-data',
    },
  };
  const response: AxiosResponse = await basicAxios(API_ENDPOINTS.post.GET_USER, options);
  return response.data;
};
