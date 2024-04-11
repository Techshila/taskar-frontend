import type { AxiosResponse } from 'axios';
import { GEOCODE_API, GEOCODE_URL } from '@/const';
import axios from 'axios';

export const getCoordinates = async (address: string) => {
  const response: AxiosResponse = await axios({
    url: `${GEOCODE_URL}/search?apiKey=${GEOCODE_API}&text=${encodeURIComponent(address)}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data.features[0].geometry.coordinates;
};

export const getAddress = async (latitude: number, longitude: number) => {
  const response: AxiosResponse = await axios({
    url: `${GEOCODE_URL}/reverse?apiKey=${GEOCODE_API}&lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}&format=json`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response.data);
};
