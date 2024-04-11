'use client';

import axios from 'axios';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const FinalPrice = () => {
  async function handleCheckout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    const paymentId: string = uuidv4();
    try {
      await axios
        .post('/api/proxy/', {
          link_id: paymentId,
          link_amount: 100,
          link_currency: 'INR',
          link_purpose: 'Payment for Taskar App',
          customer_details: {
            customer_phone: '8789686148',
            customer_name: 'Test',
            customer_email: 'test@gmail.com',
          },
          link_notify: {
            send_sms: true,
            send_email: false,
          },
          link_meta: { return_url: 'https://www.iitr.ac.in' },
        })
        .then((res) => {
          console.log(res);
          window.open(res.data.link_url, '_self');
        });
    } catch (error: any) {
      toast.error('Something Wrong Occured! Please Try Again!');
    }
  }

  return (
    <section className='p-4 rounded-3xl bg-slate-100 md:w-1/3 h-fit'>
      <div>
        <h1 className='text-xl font-semibold'>Promo code</h1>
        <div className='px-2 flex flex-row rounded-full border-2 py-1'>
          <input
            type='text'
            placeholder='Type here ...'
            className='bg-slate-100 py-2 w-full outline-none px-2 rounded-full text-lg font-semibold'
          />
          <button className='text-white bg-black px-7 py-2 rounded-full font-light'>Apply</button>
        </div>
        <div className='flex flex-col gap-3 px-2 my-4 text-slate-500 text-lg'>
          <div className='flex flex-row justify-between'>
            <h1>Subtotal</h1>
            <p>{'678.99'}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <h1>Discount</h1>
            <p>-{'78.99'}</p>
          </div>
          <div className='flex flex-row justify-between text-black font-semibold'>
            <h1>Subtotal</h1>
            <p>Rs {'600.00'}</p>
          </div>
        </div>
        <button
          className='text-white bg-black w-full text-lg py-3 text-center rounded-xl'
          onClick={handleCheckout}
        >
          {' '}
          Continue to checkout
        </button>
      </div>
    </section>
  );
};

export default FinalPrice;
