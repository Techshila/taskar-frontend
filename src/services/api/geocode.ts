import type { AxiosResponse } from 'axios';
import { GEOCODE_API, GEOCODE_URL } from '@/const';
import axios from 'axios';

export const getCoordinates = async (address: string) => {
  const response: AxiosResponse = await axios({
    url: `${GEOCODE_URL}?apiKey=${GEOCODE_API}&text=${encodeURIComponent(address)}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data.features[0].geometry.coordinates;
};
