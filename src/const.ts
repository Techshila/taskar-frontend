// Environment
export const PUBLIC_URL = process.env.NEXT_PUBLIC_PUBLIC_URL as string;
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export const GEOCODE_API = process.env.NEXT_PUBLIC_GEOCODE_API as string;
export const GEOCODE_URL = process.env.NEXT_PUBLIC_GEOCODE_URL as string;

// SEO
export const METADATA = {
  title: 'Taskar - Your Trusted Online Pharmacy',
  description:
    'Taskar is your one-stop online destination for all your medication needs. Browse our wide selection of high-quality pharmaceutical products, conveniently delivered to your doorstep. Enjoy easy and secure shopping, coupled with exceptional customer service. Trust Taskar for all your healthcare essentials.',
  author: 'Techshilla - Jawahar Bhawan',
  web_manifest: `/site.webmanifest`,
  favicon_16x16: `/favicon-16x16.png`,
  favicon_32x32: `/favicon-32x32.png`,
  icon: `/favicon.ico`,
  apple_touch_icon: `/apple-touch-icon.png`,
};
