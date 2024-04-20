import Image from 'next/image';



const OurStory = () => {
  return (
    <section className='py-16 lg:py-32 px-4 lg:px-10'>
      <div className='grid-inner'>
        <div className='overflow-hidden col-start-2 col-end-8 lg:col-start-3 lg:col-end-11 lg:pb-24 lg:px-20'>
          <h1 className='title-lg text-center txt-outline text-primary'>
            I Got A Story To Tell
          </h1>
        </div>
        <div className='relative lg:col-start-1 lg:col-end-3 col-span-8 aspect-[455/538] lg:rotate-12 rotate-3 md:p-8 origin-top-right'>
          <div className='aspect-[455/538] lg:w-[20vw] relative bx-shadow overflow-hidden lg:-translate-x-10 lg:-translate-y-20'>
            <Image
              className='object-cover h-full w-full overflow-hidden'
              alt='Pizza Party'
              src='/images/bp_img-7.webp'
              fill
              sizes='75vw'
            />
          </div>
        </div>
        <div className='col-span-full lg:col-start-4 lg:col-end-10'>
          <p className='text-black font-body text-base lg:text-2xl text-start'>
            As the Founder of Big Poppas Pizzeria, this tribute and legacy to my
            beloved son, the Notorious B.I.G. is a place where his spirit lives
            on through the art of pizza. Each slice represents a unique story,
            blending his love for hip-hop with the creativity of culinary
            excellence. This pizzeria is a celebration of his life, music, and
            the joy he brought to the world. It's a haven for pizza lovers
            seeking not just a meal but an experience infused with the soul of a
            legend. Welcome to Big Poppas, where the taste is as iconic as the
            name.
          </p>

          <div className='relative aspect-[511/278] w-[10vw] my-6'>
            <Image
              className='object-contain w-full h-full'
              fill
              src="https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002349/big_poppas/signature_h5rlvp.svg"
              sizes='(max-width: 768px) 100vw)'
              alt='Voletta Wallace Signature'
            />
          </div>
          <div className='title-sm mt-4'>
            <span className='title-sm block'>Voletta Wallace</span>
            <span className='title-sm mt-4 block'>Founder</span>
          </div>
        </div>

        <div className='relative lg:col-start-11 lg:col-end-13 col-span-full md:hidden'>
          <div className='aspect-[455/538] lg:w-[20vw] -rotate-12 relative bx-shadow overflow-hidden -translate-x-10 translate-y-20'>
            <Image
              className='object-cover h-full w-full overflow-hidden'
              alt='Pizza Party'
              src='/images/bp_img-6.webp'
              fill
              sizes='75vw'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
