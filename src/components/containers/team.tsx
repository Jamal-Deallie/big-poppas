import Image from 'next/image';


const Team = () => {
  return (
    <section className='grid-inner py-16 lg:py-32 px-4 lg:px-10 relative'>
      <div className='col-span-8 full lg:col-start-2 col-end-9 relative z-[20]'>
        <h1 className='title-lg text-primary'>Brooklyn's Finest Cooks</h1>
      </div>
      <div className='col-span-8 lg:col-start-8 lg:col-end-11 relative overflow-hidden -rotate-12 origin-bottom-left lg:absolute aspect-[910/1076] w-full z-[10] lg:top-32 md:hidden'>
        <div className='aspect-[910/1076] lg:w-full bx-shadow overflow-hidden relative h-full'>
          <Image
            className='object-cover h-full w-full overflow-hidden'
            alt='Pizza Party'
            src='/images/bp_img-8.webp'
            fill
            sizes='75vw'
          />
        </div>
      </div>
      <div className='col-span-8 lg:col-start-2 lg:col-end-6 relative overflow-hidden lg:rotate-12 lg:mt-12  origin-top-left rotate-3 md:p-4'>
        <div className='aspect-[1080/853] lg:w-full relative bx-shadow overflow-hidden'>
          <Image
            className='object-cover h-full w-full overflow-hidden'
            alt='Pizza Party'
            src='/images/bp_img-9.webp'
            fill
            sizes='75vw'
          />
        </div>
      </div>
      <div className='col-span-8 lg:col-start-7 lg:col-end-12 relative lg:mt-32'>
        <p className='text-base lg:text-lg text-secondary lg:pt-16 pt-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          facilis iure iste error atque velit doloribus adipisci, reiciendis
          corporis. Commodi dolorum exercitationem tempore cum officia veniam
          possimus consequatur animi iste quae blanditiis corrupti vitae nulla
          distinctio
        </p>
      </div>
    </section>
  );
};

export default Team;
