import AuthLayout from '@/components/auth-layout/AuthLayout';
import Link from 'next/link';

const LandingForm = () => {
  return (
    <AuthLayout>
      <div className='flex flex-col gap-y-6 items-center'>
        <p className='heading mb-5'>Sign in to your profile</p>
        <Link
          href='/login'
          className='text-2xl font-bold btn-primary rounded-2xl py-6 text-center mx-[12%] self-stretch'
        >
          Login
        </Link>
        <Link
          href='/signup'
          className='text-2xl font-bold btn-secondary rounded-2xl py-6 text-center mx-[12%] self-stretch'
        >
          Register
        </Link>
      </div>
    </AuthLayout>
  );
};

export default LandingForm;
