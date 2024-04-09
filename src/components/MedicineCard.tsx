import { _MEDICINE } from '@/types';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Image from 'next/image';
import Link from 'next/link';
const MedicineCard = ({ medicine }: { medicine: _MEDICINE }) => {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] max-w-80 sm:w-[30rem] h-full rounded-xl border'>
        <CardItem translateZ='10' className='w-full'>
          <Link href={`/${medicine.id}`}>
            <Image
              src={medicine.image}
              height='400'
              width='400'
              className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
              alt='thumbnail'
            />
          </Link>
        </CardItem>
        <div className='flex-col-center gap-2 py-1 items-start px-1'>
          <CardItem translateZ='5' className='text-xl font-bold text-neutral-600 dark:text-white'>
            {medicine.name}
          </CardItem>
          <CardItem as='p' translateZ='6' className='text-neutral-500 text-sm max-w-sm dark:text-neutral-300'>
            Hover over this card to unleash the power of CSS perspective
          </CardItem>

          <div className='flex flex-row justify-between w-full items-center'>
            <p className='font-bold'>Rs.{medicine.price}</p>
            <div className='flex flex-row gap-2 justify-between items-center'>
              <CardItem
                translateZ={2}
                as='button'
                className='px-4 py-2 bg-text rounded-full text-bg_secondary text-xs font-bold'
              >
                Add to cart
              </CardItem>
              <CardItem
                translateZ={2}
                as='button'
                className='px-4 py-2 rounded-full bg-text text-bg_secondary text-xs font-bold'
              >
                Buy now
              </CardItem>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default MedicineCard;
