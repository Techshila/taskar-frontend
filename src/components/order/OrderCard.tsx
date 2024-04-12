import { _ORDER } from '@/types';

const OrderCard = ({ order }: { order: _ORDER }) => {
  return (
    <div
      className={`border-2 rounded-2xl mx-2 my-4 p-3 flex justify-between border-green-700 cursor-pointer `}
    >
      <div className='flex'>
        <div className='text-slate-400 flex items-center'>{order.date}</div>
        <div className='px-2'>
          <div className='text-xl font-bold'>Order #{order.order_id}</div>
          <div>Rs {order.amount}</div>
        </div>
      </div>
      <div className='flex self-center'>
        <div className='text-green-800 font-medium'>{order.status}</div>
      </div>
    </div>
  );
};

export default OrderCard;
