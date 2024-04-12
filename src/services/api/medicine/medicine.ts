import type { AxiosResponse } from 'axios';
import API_ENDPOINTS from '@/services/apiEndpoints';
import { basicAxios } from '@/services/basicAxios';
import { _MEDICINE_DETAILS } from '@/types';

export const getMedicine = async (medicineId: string) => {
  const response: AxiosResponse<_MEDICINE_DETAILS[]> = await basicAxios(
    API_ENDPOINTS.get.MEDICINE_DETAIL(medicineId)
  );
  return response.data;
};
