"use client"
import CartCard from './CartCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '@/const';
import API_ENDPOINTS from '@/services/apiEndpoints';
import { useCookies } from 'react-cookie';
import { _CART_NEW } from '@/types';
import toast from 'react-hot-toast';


const CartItems =  () => {
  const [cart,setCart] = useState<_CART_NEW>({} as _CART_NEW);
  const [cookies] = useCookies(['token']);
  const [mediid,setMediid] = useState([])
  // const cart = await getCart(userId);

    useEffect(() => {
      try {
        axios.get(`
      ${BACKEND_URL+API_ENDPOINTS.get.SHOW_CART}`,{
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        }
      }
    ).then((res) => {
      setCart(res.data.data);
      setMediid(res.data.data.mediids)
      
    }).finally(()=>{});
      } catch (error) {
        toast.error('Something Wrong Occured! Please Try Again!');
      }
    },[cart])

  return (
    <section className='border-2 p-5 rounded-3xl md:w-2/3'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-3xl font-bold'>
          {' '}
          Cart <span className='text-xl font-normal text-slate-400'>{`(${mediid.length} products)`}</span>
        </h1>
        <button className='text-red-500 font-semibold'>x clear</button>
      </div>
      <div className='my-2 flex flex-col gap-3'>
        {mediid.map((_, index) => {
          return  <CartCard key={index} index={index}  item={{
            image:
    'https://images.unsplash.com/photo-1618120508902-c8d05e7985ee?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: cart.medinames[index],
  count: cart.qts[index],
  price: Number(cart.price[index]),
          }} />
        })}
      </div>
    </section>
  );
};

export default CartItems;
