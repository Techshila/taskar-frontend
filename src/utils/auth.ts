import { cookies } from 'next/headers';

export const checkCookies = (cookie: { key: string }): boolean => {
  if (cookies().has(cookie.key)) return true;
  return false;
};
