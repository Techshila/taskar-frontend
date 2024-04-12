"use client"
import HeroSection from '@/components/home/Hero';
import MedicineCard from '@/components/medicine/MedicineCard';
import { BACKEND_URL } from '@/const';
import API_ENDPOINTS from '@/services/apiEndpoints';
import { _MEDICINE } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Home = () => {
  const [medicines, setMedicines] = useState([]);
  const [cookies] = useCookies(['token']);
  useEffect(() => {
    try {
      axios.get(`
    ${BACKEND_URL+API_ENDPOINTS.get.HOME_MEDICINE}`,{
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      }
    }
  ).then((res) => {
    setMedicines(res.data.data);
  })
    } catch (error) {
      
    }
  },[])
  return (
    <div className='flex flex-col justify-start'>
      <div>
        <HeroSection />
      </div>
      <div className='flex flex-row w-screen justify-center sm:justify-around items-center px-5 mt-5 flex-wrap gap-10 sm:gap-5'>
        {medicines.map((medicine: _MEDICINE, index: number) => {
          const medi: _MEDICINE = {
            id: medicine.id,
            name: medicine.name,
            price: medicine.price,
            displayImages: medicine.displayImages,
            category: medicine.category,
          };
          return <MedicineCard key={index} medicine={medi} />;
        })}
      </div>
    </div>
  );
};

export default Home;
