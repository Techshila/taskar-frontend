import API_ENDPOINTS from '@/services/apiEndpoints';
import { basicAxios } from '@/services/basicAxios';
import { readToken } from '@/utils/api';
import { getCookies } from '@/utils/serverapi';
import type { AxiosResponse } from 'axios';

export const homePageMedicines = async () => {
  const options = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${getCookies({ key: 'token' })}`,
    },
  };
  const response: AxiosResponse = await basicAxios(API_ENDPOINTS.get.HOME_MEDICINE, options);
  return response.data.data;
};
