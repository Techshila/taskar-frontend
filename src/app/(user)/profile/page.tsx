"use client"
import { _ADDRESS, _USER } from '@/types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '@/const';
import API_ENDPOINTS from '@/services/apiEndpoints';
import { useCookies } from 'react-cookie';
import Image from 'next/image';

const Member =  () => {
  const [user, setUser] = useState<_USER>({} as _USER);
  const [cookies] = useCookies(['token']);
  

   useEffect(()=>{
    try {
      axios.post(`
    ${BACKEND_URL+API_ENDPOINTS.post.GET_USER}`,{},{
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      }
    }
  ).then((res) => {
    setUser(res.data.data);
  })
    } catch (error) {
    }
  },[])



 
  return (
    <div className='my-5 flex-col justify-center'>
      <h1 className='text-3xl font-bold flex justify-center'>My Profile</h1>
      <div className='flex justify-center my-5'>
        <Image width={100} height={100}  src={"https://images.pexels.com/photos/20393333/pexels-photo-20393333/free-photo-of-a-woman-with-a-flower-face-paint-on-her-face.jpeg"} alt={''} className='rounded-full w-40 h-40 z-10 object-cover' />
      </div>

      <div className='border-2 rounded-3xl mx-4 my-2 px-6 pb-1 pt-16 border-green-800 transform -translate-y-20'>
        <div className='flex justify-center items-baseline'>
          <div className='text-4xl text-green-700 font-bold'>
            {user.firstName} {user.lastName}{' '}
          </div>{' '}
          <div className='text-xl text-green-600'>&nbsp;(@{user.username})</div>
        </div>
        <div className='text-xl flex justify-center py-1'>
          <div className='text-green-700 font-bold'>Role:&nbsp;</div>{' '}
          <div className='text-green-600'>
            {user.isCEO ? 'CEO' : user.isStoreManager ? 'Store Manager' : 'User'}
          </div>
        </div>
        <div className='flex text-lg py-3 justify-between'>
          <div className='flex'>
            <div className='text-green-700 font-bold'>Email Address:&nbsp;</div>{' '}
            <div className='text-green-600'>{user.email}</div>
          </div>
          <div className='flex'>
            <div className='text-green-700 font-bold'>Phone No:&nbsp;</div>{' '}
            <div className='text-green-600'>{user.phoneNumber}</div>
          </div>
        </div>
        <div className='text-lg py-3 flex flex-col gap-2 '>
          <h1 className='text-lg font-bold'>Addresses</h1>
          {user.addresses?.map((address: _ADDRESS, index: number) => {
            return (<div  key={index}>
              <h1>{`${address.street}, ${address.city}, ${address.state}, ${address.pinCode}`}</h1>
            </div>)
          })}

        </div>
      </div>
    </div>
  );
};

export default Member;
