"use client"
import { BACKEND_URL } from '@/const';
import { _CART_ITEM } from '@/types';
import axios from 'axios';
import Image from 'next/image';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';

const CartCard = ({ item, index }: { item: _CART_ITEM,index:number }) => {
  const [cookies] = useCookies(['token']);
  const deleteItem = () => {
    try {
      axios.get(`${BACKEND_URL}/user/cart/del/${index}`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      }).then((res) => {
        if (res.status ===200) toast.success('Item Deleted Successfully');
      }).finally(()=>{});
    } catch (error) {
      toast.error('Something went wrong');
    }
  }
  const addQty = () => {
    try {
      axios.get(`${BACKEND_URL}/user/cart/add/${index}`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      }).then((res) => {
        if (res.status ===200) toast.success('Item Deleted Successfully');
      }).finally(()=>{});
    } catch (error) {
      toast.error('Something went wrong');
    }
  }
  const subQty = () => {
    if (item.count === 1) {
      deleteItem();
    } else {
      try {
        axios.get(`${BACKEND_URL}/user/cart/sub/${index}`, {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }).then((res) => {
          if (res.status ===200) toast.success('Item Deleted Successfully');
        }).finally(()=>{});
      } catch (error) {
        toast.error('Something went wrong');
      }
    }
  }
  return (
    <div className='p-3 border-2 rounded-3xl flex flex-row flex-wrap gap-3 xl:justify-between'>
      <div className='flex flex-row gap-5'>
        <Image
          src={item.image}
          alt={item.name}
          width={100}
          height={100}
          className='w-28 h-28 object-cover rounded-3xl'
        />
        <div className='flex flex-col xl:justify-center'>
          <h1 className='text-xl font-semibold'>{item.name}</h1>
          <p className='font-light text-slate-500'>something</p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center w-full xl:w-auto xl:gap-5'>
        <div className='flex flex-row gap-3 text-2xl items-center'>
          <button onClick={subQty} className='text-white bg-black w-10 h-10 rounded-full'>-</button>
          <p>{item.count}</p>
          <button onClick={addQty} className='text-white bg-black w-10 h-10 rounded-full'>+</button>
        </div>
        <h1 className='text-xl'>Rs. {item.count * item.price}</h1>
        <button onClick={deleteItem} className='text-xl font-light text-red-600'>x</button>
      </div>
    </div>
  );
};

export default CartCard;
