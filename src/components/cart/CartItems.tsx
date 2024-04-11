import { CART_ITEM } from '@/utils/dummyData';
import CartCard from './CartCard';

const CartItems = async ({ userId }: { userId: string }) => {
  // const cart = await getCart(userId);
  console.log(userId);
  return (
    <section className='border-2 p-5 rounded-3xl md:w-2/3'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-3xl font-bold'>
          {' '}
          Cart <span className='text-xl font-normal text-slate-400'>{'(2 products)'}</span>
        </h1>
        <button className='text-red-500 font-semibold'>x clear</button>
      </div>
      <div className='my-2 flex flex-col gap-3'>
        <CartCard item={CART_ITEM} />
        <CartCard item={CART_ITEM} />
        <CartCard item={CART_ITEM} />
        <CartCard item={CART_ITEM} />
        <CartCard item={CART_ITEM} />
        <CartCard item={CART_ITEM} />
      </div>
    </section>
  );
};

export default CartItems;
