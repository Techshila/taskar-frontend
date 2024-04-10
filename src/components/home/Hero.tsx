'use client';
import { motion } from 'framer-motion';
import { ImagesSlider } from '@/components/ui/image-slider';

const HeroSection = () => {
  const images = [
    'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8',
    'https://images.unsplash.com/photo-1642055514517-7b52288890ec',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
  ];
  return (
    <ImagesSlider className='h-screen rounded-lg' images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className='z-50 flex flex-col justify-center items-center'
      >
        <motion.p className='font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4'>
          Empowering Your Health Journey <br /> Your Prescription for Convenience
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
};

export default HeroSection;
