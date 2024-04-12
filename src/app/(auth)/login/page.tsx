'use client';
import AuthLayout from '@/components/auth-layout/AuthLayout';
import { login } from '@/services/api/auth/login';
import useUserStore from '@/stores/userStore';
import { _LOGIN_DATA } from '@/types';
import { readToken } from '@/utils/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const setUser = useUserStore((state) => state.setUser);
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['token']);
  const router = useRouter();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const userData: _LOGIN_DATA = {
      email: email,
      password: password,
    };
    try {
      const res = await login(userData);
      setUser(res);
      setCookie('token', res.accessToken);
      if (res.accessToken) {
        router.push('/');
      }
    } catch (e) {
      console.log('error occurred', e);
    }
  };

  return (
    <AuthLayout>
      <div className='form-container'>
        <p className='heading'>Log in to your account</p>
        <form>
          <label htmlFor='email' className='login-label'>
            Email Id
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter you email id'
            required
            className='login-input mb-4'
            onChange={handleEmail}
          />
          <label htmlFor='password' className='login-label'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter you password'
            required
            className='login-input mb-6'
            onChange={handlePass}
          />
          <button
            onClick={handleLogin}
            type='button'
            className='btn-secondary rounded-full text-2xl py-3 px-6 font-bold'
          >
            Continue
          </button>
        </form>
        <Link href='/signup' className='text-blue-500'>
          Don&apos;t have an account? Register here
        </Link>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;
