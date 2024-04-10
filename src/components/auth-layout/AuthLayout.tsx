import Image from 'next/image';
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex-row-center h-screen justify-start w-screen bg-white'>
      <Image
        src='https://images.pexels.com/photos/4021813/pexels-photo-4021813.jpeg'
        width={400}
        height={200}
        className='w-[50%] h-full object-fill max-lg:hidden'
        alt='background'
      />
      <div className='overflow-y-auto flex flex-col content-center self-stretch grow px-[10%]'>
        <div className='py-[10%]'>
          <div className='py-[3rem]'>
            <h1 className='text-5xl font-bold text-center'>Taskar Pharmacy</h1>
            <p className='text-3xl font-light text-slate-500 text-center my-5'>
              Empowering Your Health Journey <br /> Your Prescription for Convenience
            </p>
          </div>
        </div>
        {children}
        <p className='text-xl mt-auto py-4 self-center'>Made by Jawahar Bhawan, IIT Roorkee</p>
      </div>
    </div>
  );
};

export default AuthLayout;
