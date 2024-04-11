'use client';
import { getAddress } from '@/services/api/geocode';
import { _LOCATION } from '@/types';
import { useState } from 'react';

const Geolocation = () => {
  const [userLocation, setUserLocation] = useState<_LOCATION>({
    latitude: null,
    longitude: null,
  });
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(position.coords);
          console.log('Latitude:', latitude, 'Longitude:', longitude);
          setUserLocation({ latitude: latitude, longitude: longitude });
          getAddress(latitude, longitude);
        },
        (error) => {
          // display an error if we cant get the users position
          console.error('Error getting user location:', error);
        }
      );
      navigator.geolocation.watchPosition;
    } else {
      // display an error if not supported
      console.error('Geolocation is not supported by this browser.');
    }
  };
  return (
    <div>
      <button onClick={getUserLocation}>Get Location</button>
      <p>Latitude: {userLocation.latitude} </p>
      <p>Longitude: {userLocation.longitude}</p>
    </div>
  );
};

export default Geolocation;
