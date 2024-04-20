import { ReactNode, Suspense } from 'react';

import { Footer, NavHeader, LenisScroll } from '@/components';
import { ReactLenis } from '@/utils/react-lenis';
const Wrapper = ({
  children,
  lenisOptions,
}: {
  children: ReactNode;
  lenisOptions?: {};
}) => {
  return (
    <>
      <ReactLenis root options={lenisOptions} />
      <div>
        <Suspense>
          <NavHeader />
        </Suspense>
        <Suspense>{children}</Suspense>
        <Footer />
      </div>
      <LenisScroll />
    </>
  );
};

export default Wrapper;
