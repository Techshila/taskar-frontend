const FinalPrice = () => {
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
        <button className='text-white bg-black w-full text-lg py-3 text-center rounded-xl'>
          {' '}
          Continue to checkout
        </button>
      </div>
    </section>
  );
};

export default FinalPrice;
