import Image from 'next/image';

import { Button } from '../../components';

const MenuIntro = () => {
  return (
    <div className='px-4 lg:px-10 grid-inner lg:py-32 py-16 relative'>
      <div className='lg:col-start-2 lg:col-end-9 col-span-full z-[2] relative'>
        <h1 className='title-lg text-black leading-[0.86]'>
          SPREAD LOVE THATS THE BROOKLYN WAY
        </h1>
      </div>
      <div className='lg:col-start-2 lg:col-end-7 col-span-full'>
        <p className='text-base lg:text-lg font-semibold lg:pt-6 lg:pb:8'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>

        <Button
          font='heading'
          fontSize='xxl'
          className='mt-6 btn-target border-secondary border bg-tertiary rounded-[4px] text-secondary btn-shadow lg:py-5 lg:px-12 md:w-full'>
          Check out our Menu
        </Button>
      </div>

      <div className='video-wrapper lg:absolute left-0 top-0 w-full lg:col-start-7 lg:col-end-12 col-span-full aspect-[1080/851] overflow-hidden lg:mt-32 mt-16 rotate-6 z-[1] bx-shadow'>
        <div className='video-right absolute left-0 top-0 h-full w-full [clip-path:inset(0)] p-2'>
          <video
            muted={true}
            playsInline
            autoPlay
            loop
            className='block h-full w-full object-cover align-middle'>
            <source src='/videos/bp_01.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='aspect-[1080/851] w-full overflow-hidden absolute'>
          <Image
            className='object-cover h-full w-full'
            alt='Pizza Party'
            src='/images/frame-02.webp'
            fill
            sizes='75vw'
          />
        </div>
      </div>
    </div>
  );
};

export default MenuIntro;
