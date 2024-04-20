import type { Metadata } from 'next';
import { Suspense } from 'react';

import './globals.css';
import { METADATA } from '@/constant/site';
import { Wrapper, LenisScroll } from '../components';

import { familjenGroteskn, feel_good } from '../fonts';

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${feel_good.variable} ${familjenGroteskn.variable}`}
        suppressHydrationWarning={true}>
        <Wrapper>{children}</Wrapper>
  
      </body>
    </html>
  );
}
