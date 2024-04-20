import Image from 'next/image';

import {
  About,
  Button,
  MenuIntro,
  Nutrition,
  Reviews,
  Visit,
} from '../components';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <div className='grid-inner aspect-video bg-primary'>
        <div className='lg:col-span-2 relative mt-nav-height'>
          <div className='w-full h-full relative flex flex-col lg:pt-10'>
            <div className='aspect-[455/538] lg:w-[20vw] rotate-12 relative top-0 bottom-0 bx-shadow overflow-hidden shrink-0 -translate-x-10'>
              <Image
                className='object-cover h-full w-full overflow-hidden'
                alt='Pizza Party'
                src='/images/bp_img-1.webp'
                fill
                sizes='75vw'
              />
            </div>
            <div className='aspect-[455/538] lg:w-[20vw] rotate-[-15deg] relative bx-shadow overflow-hidden -translate-y-20'>
              <Image
                className='object-cover h-full w-full overflow-hidden'
                alt='Pizza Party'
                src='/images/bp_img-3.webp'
                fill
                sizes='75vw'
              />
            </div>
          </div>
        </div>
        <div className='col-span-full lg:col-start-3 lg:col-end-11 lg:px-20 px-4 py-nav-height flex-col flex'>
          <h1 className='title-lg text-black leading-[0.86] lg:pt-20 text-center'>
            I LOVE IT WHEN YOU CALL ME BIG POPPA
          </h1>
          <p className='lg:text-lg text-base text-black mt-4 font-semibold lg:px-24 text-center'>
            Whether you're seeking a cozy dinner with friends, a family
            gathering, or a quick lunchtime escape, Big Poppas Pizza guarantees
            an unforgettable experience. So, come join us and become a part of
            our pizza-loving community
          </p>

          <Button
            font='heading'
            fontSize='xxl'
            className='mt-8 btn-target border-black border bg-black rounded-[4px] text-secondary-foreground  btn-box-shadow lg:py-5 lg:mx-64 md:w-full'>
            Order Now
          </Button>
        </div>
        <div className='lg:col-start-11 lg:col-end-13 relative mt-nav-height'>
          <div className='w-full h-full relative flex flex-col lg:pt-10'>
            <div className='aspect-[455/538] lg:w-[20vw] -rotate-12 relative top-0 bottom-0 bx-shadow overflow-hidden shrink-0'>
              <Image
                className='object-cover h-full w-full overflow-hidden'
                alt='Pizza Party'
                src='/images/bp_img-4.webp'
                fill
                sizes='75vw'
              />
            </div>
            <div className='aspect-[455/538] lg:w-[20vw] rotate-12 relative bx-shadow overflow-hidden -translate-x-10 -translate-y-20'>
              <Image
                className='object-cover h-full w-full overflow-hidden'
                alt='Pizza Party'
                src='/images/bp_img-5.webp'
                fill
                sizes='75vw'
              />
            </div>
          </div>
        </div>
      </div>

      <About />
      <div className='bg-primary'>
        <MenuIntro />
        <Nutrition />
      </div>
      <Reviews />
      <Visit /> 
      {/* 
     */}
    </main>
  );
}
