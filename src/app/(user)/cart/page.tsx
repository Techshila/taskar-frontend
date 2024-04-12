import CartItems from '@/components/cart/CartItems';
import FinalPrice from '@/components/cart/FinalPrice';

const Cart = async () => {
  // const cart = await showCart();
  return (
    <div className='my-10 mx-5 flex flex-col gap-5 md:flex-row'>
      <CartItems userId='12345' />
      <FinalPrice />
    </div>
  );
};

export default Cart;
