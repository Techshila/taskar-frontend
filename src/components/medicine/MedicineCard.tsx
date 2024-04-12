'use client';
import { _MEDICINE } from '@/types';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { BACKEND_URL } from '@/const';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
const MedicineCard = ({ medicine }: { medicine: _MEDICINE }) => {
  const [cookies] = useCookies(['token']);
  const addToCart = () => {
    try {
      axios.get(`${BACKEND_URL}/user/cart/?id=${medicine.id}`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      
      }).then((res)=> {
        console.log(res.data)
        if (res.data.message === "Added to Cart successfully!!") {
          toast.success('Added to Cart successfully!!');
        }
      })

    } catch (error) {
      toast.error('Something went wrong');
    }
  };
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:max-w-80 sm:w-[30rem] w-full h-full rounded-xl border'>
        <CardItem translateZ='10' className='w-full'>
          <Link href={`/medicine/${medicine.id}`}>
            <Image
              src={medicine.displayImages[0]}
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
              <div
                onClick={addToCart}
                className='px-4 py-2 bg-text rounded-full text-bg_secondary text-xs font-bold'
              >
                <CardItem translateZ={2} as='button'>
                  Add to cart
                </CardItem>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default MedicineCard;
