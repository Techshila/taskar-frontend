'use client';
import { readToken } from '@/utils/api';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import toast from 'react-hot-toast';

export const AuthRequired = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    const token = readToken();
    if (!token) {
      toast.error('You need to login first');
      router.push('/login');
    }
  });

  return <div>{children}</div>;
};
