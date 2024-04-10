import { basicAxios } from '@/services/basicAxios';
import API_ENDPOINTS from '@/services/apiEndpoints';

export async function logout() {
  await basicAxios(API_ENDPOINTS.post.LOGOUT, {
    method: 'POST',
  });
}
