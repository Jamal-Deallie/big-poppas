import Image from 'next/image';


const Visit = () => {
  return (
    <section className='bg-primary lg:border-t-4 border-black border-t-2'>
      <div className='py-16 p-inline'>
        <div className='grid-inner'>
          <div className='col-span-full lg:col-start-3 lg:col-end-11 lg:justify-self-center lg:pb-16'>
            <h1 className='title-lg text-secondary text-center txt-outline'>
              Same Number Same Hood
            </h1>
          </div>
        </div>
        <div className='grid-inner relative lg:h-[35vw] md:h-[70vw]'>
          <div className='video-wrapper absolute left-0 top-0 w-full lg:col-start-6 lg:col-end-10 col-start-2 col-end-6 aspect-[1080/851] overflow-hidden rotate-6 z-[1] bx-shadow lg:mt-10'>
            <div className='video-right absolute left-0 top-0 h-full w-full [clip-path:inset(0)] p-2'>
              <video
                muted={true}
                playsInline
                autoPlay
                loop
                className='block h-full w-full object-cover align-middle'>
                <source src='/videos/interior-2.mp4' type='video/mp4' />
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
          <div className='video-wrapper absolute left-0 top-0 w-full lg:col-start-4 lg:col-end-7 col-span-full aspect-[1600/1935] overflow-hidden -rotate-12 z-[1] bx-shadow mt-20 col-start-4 col-end-8'>
            <div className='video-right absolute left-0 top-0 h-full w-full [clip-path:inset(0)] p-2'>
              <video
                muted={true}
                playsInline
                autoPlay
                loop
                className='block h-full w-full object-cover align-middle'>
                <source src='/videos/interior-1.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='aspect-[1600/1935] w-full overflow-hidden absolute'>
              <Image
                className='object-cover h-full w-full'
                alt='Pizza Party'
                src='/images/frame-01.webp'
                fill
                sizes='75vw'
              />
            </div>
          </div>
        </div>

        <div className='grid-inner relative pb:16 lg:pb-20 pt-12'>
          <div className='col-span-full lg:col-span-4 md:mt-6'>
            <div className='mx-auto w-fit text-center'>
              <h1 className='title-sm  text-secondary pb-2 lg:pb-8'>Address</h1>
              <p className='text-base lg:text-2xl text-secondary'>
                159 Carlton Ave <br /> Brooklyn, NY 11205
              </p>
            </div>
          </div>

          <div className='col-span-full lg:col-span-4 md:my-6'>
            <div className='mx-auto w-fit text-center'>
              <h1 className='title-sm  text-secondary pb-2 lg:pb-8'>
                Phone Number
              </h1>
              <p className='text-base lg:text-2xl text-secondary'>
                (123) 444-5555
              </p>
            </div>
          </div>
          <div className='col-span-full lg:col-span-4 md:mb-6'>
            <div className='mx-auto w-fit text-center'>
              <h1 className='title-sm  text-secondary pb-2 lg:pb-8'>Hours</h1>
              <p className='text-base lg:text-2xl text-secondary'>
                Open Daily, from 11:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
