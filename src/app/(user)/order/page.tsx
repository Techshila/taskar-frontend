import OrderCard from '@/components/order/OrderCard';
import { ORDER  , TRANSACTION} from '@/utils/dummyData';

import OrderDetails from '@/components/order/OrderDetails';
const OrderPage = () => {
  return (
    <div className='my-5 flex-col justify-center'>
      <h1 className='text-3xl font-bold flex justify-center'>My Orders</h1>
      <div className='border-2 rounded-3xl mx-4 my-2 px-3 py-1 border-green-800'>
        <OrderCard order={ORDER} />
        <OrderCard order={ORDER} />
      </div>
      <OrderDetails transaction={TRANSACTION}/>
    </div>
  );
};

export default OrderPage;
