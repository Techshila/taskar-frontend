import API_ENDPOINTS from '@/services/apiEndpoints';
import { basicAxios } from '@/services/basicAxios';
import { _REVIEW } from '@/types';
import { readToken } from '@/utils/api';
import type { AxiosResponse } from 'axios';

export const review = async (medicineId: string, formData: _REVIEW) => {
  const options = {
    body: formData,
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${readToken()}`,
      'Content-Type': 'multipart/form-data',
    },
  };
  const response: AxiosResponse<string> = await basicAxios(API_ENDPOINTS.post.REVIEW(medicineId), options);
  return response.data;
};
