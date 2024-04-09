import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex-col-center h-screen gap-3'>
      <h2 className='text-5xl text-green-600'>Not Found</h2>
      <p className='text-xl '>Could not find requested resource</p>
      <Link
        href='/'
        className='px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600'
      >
        <div className='absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent' />
        <span className='relative z-20'>Home</span>
      </Link>
    </div>
  );
}
