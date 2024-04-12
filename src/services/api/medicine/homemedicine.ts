import API_ENDPOINTS from '@/services/apiEndpoints';
import { basicAxios } from '@/services/basicAxios';
import type { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';

export const homePageMedicines = async () => {
  const [cookies] = useCookies(['token']);
  const options = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${cookies}`,
    },
  };
  const response: AxiosResponse = await basicAxios(API_ENDPOINTS.get.HOME_MEDICINE, options);
  return response.data.data;
};
