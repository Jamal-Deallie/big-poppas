import { Familjen_Grotesk } from 'next/font/google';
import localFont from 'next/font/local';

export const familjenGroteskn = Familjen_Grotesk({
  subsets: ['latin'],
  variable: '--body-font',
  fallback: ['sans-serif'],
  display: 'swap',
});

export const feel_good = localFont({
  src: './Feel_Good.woff2',
  variable: '--heading-font',
  fallback: ['sans-serif'],
  display: 'swap',
});
