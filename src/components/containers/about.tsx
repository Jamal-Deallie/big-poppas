import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='w-full relative lg:pt-32 pt-16 lg:border-y-4 border-y-2 border-black'>
      <div className='grid-inner relative h-fit'>
        <div className='lg:col-start-3 lg:col-end-11 text-center col-span-full relative'>
          <h1 className='title-lg text-primary leading-[0.86]'>
            And if you don't know, now you know
          </h1>
        </div>
      </div>
      <div className='grid-inner lg:pb-32 relative z-[2] lg:h-[25vw] lg:mt-24 mt-12 p-inline'>
        <div className='lg:col-start-3 lg:col-end-7 relative col-span-full'>
          <div className='right aspect-[1] lg:w-[25vw] md:hidden lg:block'></div>
          <p className='text-base lg:text-lg font-semibold'>
            Big Poppa's Pizza is an ode to the legendary Notorious B.I.G,
            blending hip-hop culture with the art of pizza-making. Our mission
            is to deliver exceptional taste experiences, crafting each pie with
            premium ingredients and innovative flavors. We strive to honor
            Biggie's legacy by serving up slices of greatness to every customer.
          </p>
        </div>
        <div className='lg:col-start-6 lg:col-end-8 w-full lg:aspect-1 lg:absolute lg:h-full aspect-[48/79] col-start-1 col-end-8 relative md:order-3'>
          <Image
            className='h-full w-full object-cover object-top'
            fill
            alt='hand holding Pizza Slice'
            src='/images/intro_pizza.webp'
            sizes='75vw'
          />
        </div>
        <div className='lg:col-start-7 lg:col-end-11 relative col-span-full md:py-4'>

          <div className='left aspect-[1] w-[25vw] md:hidden'></div>
          <p className='text-base lg:text-lg font-semibold lg:text-right'>
            At Big Poppa's, our mission is to create more than just pizzas;
            we're crafting moments of joy and celebration. With each bite, we
            invite you to experience the passion, creativity, and soulfulness
            that define our pizzas. From classic flavors to bold innovations,
            we're committed to delivering a legendary dining experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
