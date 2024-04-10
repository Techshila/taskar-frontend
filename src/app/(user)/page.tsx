import HeroSection from '@/components/home/Hero';
import MedicineCard from '@/components/medicine/MedicineCard';
import { MEDICINE } from '@/utils/dummyData';

const Home = () => {
  return (
    <div className='flex flex-col justify-start'>
      <div>
        <HeroSection />
      </div>
      <div className='flex flex-row justify-start items-center w-full mx-5'>
        <MedicineCard medicine={MEDICINE} />
      </div>
    </div>
  );
};

export default Home;
