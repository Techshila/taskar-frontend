import HeroSection from '@/components/home/Hero';
import MedicineCard from '@/components/medicine/MedicineCard';
import { homePageMedicines } from '@/services/api/medicine/homemedicine';
import { _MEDICINE } from '@/types';

const Home = async () => {
  const medicines = await homePageMedicines();
  console.log(medicines);
  return (
    <div className='flex flex-col justify-start'>
      <div>
        <HeroSection />
      </div>
      <div className='flex flex-row w-screen justify-center sm:justify-start items-center mx-5 mt-5 flex-wrap gap-4'>
        {medicines.map((medicine: any, index: number) => {
          const medi: _MEDICINE = {
            id: index,
            name: medicine[0],
            price: medicine[2],
            image: medicine[3][0],
            category: medicine[1],
          };
          return <MedicineCard key={index} medicine={medi} />;
        })}
      </div>
    </div>
  );
};

export default Home;
