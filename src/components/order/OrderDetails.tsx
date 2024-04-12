import { _TRANSACTION } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
const OrderDetails = ({ transaction }: { transaction: _TRANSACTION }) => {
  return (
    <div className={`border-2 rounded-2xl mx-2 my-4 p-3 flex flex-row justify-between border-green-700 `}>
      <div className='flex flex-col'>
        <div className='text-xl font-bold'>Order #{transaction.order.order_id}</div>
        <Link href={`/${transaction.item.id}`}>
          <Image
            src={transaction.item.image}
            height='200'
            width='200'
            className=' rounded-xl my-5'
            alt='thumbnail'
          />
        </Link>
      </div>
      <div className='pb-10 m-auto'>
        <div className='text-xl font-bold'>{transaction.item.name}</div>
        <div className='text-black flex items-center'>Date of order : {transaction.order.date}</div>
        <div className='text-green-800 font-medium'>Status : {transaction.order.status}</div>

        <div className='text-green-800 font-medium mt-10'>Billing Name : {transaction.buyer}</div>
        <div className='text-green-800 font-medium'>Billing Amount : {transaction.order.amount}</div>
      </div>
    </div>
  );
};

export default OrderDetails;
