import { cookies } from 'next/headers';

export const getCookies = (cookie: { key: string }): boolean => {
  return cookies().has(cookie.key);
};
