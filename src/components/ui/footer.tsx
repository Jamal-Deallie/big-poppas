'use client';

import {Icons, NavLink } from '../../components';

const Footer = () => {
  const dateYear = new Date();


  return (
    <footer className='footer bg-black border-t border-white text-white py-8'>
      <div className='grid-inner px-4 lg:px-10 lg:pt-1 lg:pb-6'>
        <div className='relative  lg:col-start-1 lg:col-end-5 col-span-full flex lg:gap-4 gap-2 items-center'>
          <p className='title-sm text-white leading-[0.86]'>Big Poppas</p>
          <Icons.logo className='relative block aspect-[68.362/63.677] lg:w-18 w-16 fill-tertiary' />
        </div>

        <div className='col-span-full lg:col-start-8 lg:col-end-13'>
          <nav className='flex lg:gap-12 gap-6 md:py-4 md:flex-col lg:justify-end '>
            <NavLink
              href='/story'
              className='text-base text-white lg:text-lg font-medium'
              matchedClass='text-lg hover:text-secondary text-primary'
              unmatchedClass='text-white hover:text-primary transition ease-in duration-200'>
              Our Story
            </NavLink>
            <NavLink
              href='/menu'
              className='text-base text-white lg:text-lg font-medium'
              matchedClass='text-lg hover:text-secondary text-primary'
              unmatchedClass='text-white hover:text-primary transition ease-in duration-200'>
              Menu
            </NavLink>
            <NavLink
              href='/contact'
              className='text-base text-white lg:text-lg font-medium'
              matchedClass='text-lg hover:text-secondary text-primary'
              unmatchedClass='text-white hover:text-primary transition ease-in duration-200'>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
      <div className='w-full flex justify-center items-center px-4 lg:px-10 overflow-hidden'>
        <Icons.doodleLine className='fill-tertiary w-[150%] block' />
      </div>

      <div className='grid-inner py-8 lg:px-10 px-4'>
        <div className='col-span-full lg:col-start-1 lg:col-end-3'>
          <p className='text-base text-white lg:text-lg'>159 Carlton Ave</p>
          <p className='text-base text-white lg:text-lg'>Brooklyn, NY 11205</p>
          <p className='text-base text-white lg:text-lg'>123-123-4567</p>
          <p className='text-base text-white lg:text-lg'>
            support@bigpoppas.com
          </p>
        </div>
        <div className='lg:col-start-8 lg:col-end-13'>
          <div className='flex gap-12 lg:justify-end'>
            <Icons.tikTok className='lg:w-6 lg:h-6 block fill-tertiary' />
            <Icons.instagram className='lg:w-6 lg:h-6 block fill-tertiary' />
            <Icons.x className='lg:w-5 lg:h-5 block fill-tertiary' />
          </div>
        </div>
      </div>
      <div className='flex lg:justify-between w-full px-4 lg:px-10 lg:items-center lg:pt-10 md:flex-col'>
        <p className='text-base block md:order-2'>{`@ Big Poppas - ${dateYear.getFullYear()}`}</p>

        <div className='flex lg:gap-12 md:flex-col lg:justify-between md:pb-8 gap-6'>
          <NavLink
            href='/faqs'
            className='text-base text-white lg:text-lg font-medium'
            matchedClass='text-lg hover:text-secondary text-primary'
            unmatchedClass='text-white hover:text-primary transition ease-in duration-200'>
            Faqs
          </NavLink>
          <NavLink
            href='/privacy'
            className='text-base text-white lg:text-lg font-medium'
            matchedClass='text-lg hover:text-secondary text-primary'
            unmatchedClass='text-white hover:text-primary transition ease-in duration-200'>
            Private Policy
          </NavLink>
          <NavLink
            href='/'
            className='text-base text-white lg:text-lg font-medium'
            matchedClass='text-lg hover:text-secondary text-primary'
            unmatchedClass='text-white hover:text-primary transition ease-in duration-200'>
            SiteMap
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
