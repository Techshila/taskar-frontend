import MedicineCard from '@/components/MedicineCard';
import { MEDICINE } from '@/utils/dummyData';

const Home = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return (
    <div className='flex flex-row mx-5 mt-5 items-center justify-start gap-5 max-h-fit flex-wrap'>
      {arr.map((_, index) => {
        return (
          <div key={index}>
            <MedicineCard medicine={MEDICINE} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
