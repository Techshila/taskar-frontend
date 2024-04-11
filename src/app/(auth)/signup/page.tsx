'use client';
import { signup } from '@/services/api/auth/signup';
import { _LOGIN_DATA } from '@/types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/auth-layout/AuthLayout';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handlePassConfrm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSignin = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const userData: _LOGIN_DATA = {
      email: email,
      password: password,
    };
    if (password != passwordConfirm) {
      setPasswordError('Password and Confirm Password should be same');
      return;
    }
    await signup(userData);
    router.push('/login');
  };

  return (
    <AuthLayout>
      <div className='form-container'>
        <p className='heading'>Register your Account!</p>
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
            placeholder='Enter you Password'
            required
            className='login-input mb-6'
            onChange={handlePass}
          />
          <label htmlFor='password' className='login-label'>
            Confirm Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter you Confirm Password'
            required
            className='login-input mb-6'
            onChange={handlePassConfrm}
          />
          {passwordError && passwordError != '' ? (
            <pre className='text-red-500 w-full mb-6'>{passwordError}</pre>
          ) : null}
          <button
            onClick={handleSignin}
            type='button'
            className='btn-secondary rounded-full text-2xl py-3 px-6 font-bold'
          >
            Continue
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignupForm;
