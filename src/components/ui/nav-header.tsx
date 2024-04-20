'use client';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLenis, Lenis } from '@/utils/react-lenis';
import { Icons, NavLink } from '@/components';
import { cn } from '@/utils/cn';
import { gsap } from '@/utils/gsap';

const NavHeader = () => {
  const root = useRef<HTMLDivElement>(null);
  // store the timeline in a ref.
  const tl = useRef<gsap.core.Timeline>(null!);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const lenis = useLenis();
  console.log();
  const { contextSafe } = useGSAP(
    () => {
      if (!root.current) return;

      tl.current = gsap.timeline({ pause: true });
      const links = gsap.utils.toArray<HTMLAnchorElement>(
        '.link-target',
        root.current
      );
      tl.current
        .to('.menu', {
          duration: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: 'power2.out',
        })
        .fromTo(
          links,
          { yPercent: 100 },
          { yPercent: 0, stagger: 0.2 },
          '-=0.5'
        )
        .reverse();
    },
    { scope: root }
  );

  const toggleMenu = contextSafe(() => {
    if (!tl.current) return;
    setNavIsOpen(!navIsOpen);
    tl.current.reversed(!tl.current.reversed());
  });

  useGSAP(() => {
    tl && tl.current.reversed(!navIsOpen);
  }, [navIsOpen, tl]);

  useEffect(() => {
    setNavIsOpen(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (navIsOpen && lenis) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [lenis, navIsOpen]);

  return (
    <div
      ref={root}
      className='fixed top-0 left-0 right-0 z-50 lg:border-b-2 border-tertiary'>
      <header className='w-full h-nav-height bg-secondary grid-inner  p-inline'>
        <Link
          href='/'
          className='relative w-full h-full flex items-center col-span-4 col-start-1 group gap-2'>
          <div className='py-2 shrink-0'>
            <span className='font-heading text-white text-base lg:text-2xl group-hover:text-primary transition-colors ease-in duration-300 block'>
              Big Poppas
            </span>
          </div>
          <Icons.logo
            aria-hidden
            className='relative block aspect-[68.362/63.677] lg:w-16 w-14 fill-tertiary group-hover:fill-primary transition-colors ease-in duration-300'
          />
        </Link>
        <div className='lg:col-start-11 lg:col-end-13 col-start-7 col-end-9 h-full w-full flex items-center justify-end'>
          <button
            onClick={toggleMenu}
            type='button'
            aria-label='toggle curtain navigation'
            className='relative lg:px-3 cursor-pointer lg:py-2 z-20 text-primary font-heading text-4xl flex bg-tertiary rounded-md gap-2 hover:text-secondary transition-colors ease-in duration-200 group w-fit ml-auto'>
            <div className='h-9 w-9 bg-tertiary flex justify-between flex-col py-3 px-1 ring-[2.5px] ring-black'>
              <div
                className={cn(
                  'bg-black transition-all duration-300 ease-out h-[1px] w-full shrink-0 rounded-sm origin-left',
                  navIsOpen
                    ? 'rotate-45 -translate-y-1 translate-x-1'
                    : 'translate-y-0 rotate-0'
                )}></div>
              <div
                className={cn(
                  'bg-black transition-all duration-300 ease-out h-[1px] w-full shrink-0 rounded-sm',
                  navIsOpen
                    ? 'opacity-0 translate-x-full'
                    : 'opacity-1 translate-x-0'
                )}></div>
              <div
                className={cn(
                  'bg-black transition-all duration-300 ease-out h-[1px] w-full shrink-0 rounded-sm origin-left',
                  navIsOpen
                    ? '-rotate-45 translate-y-1 translate-x-1'
                    : 'translate-y-0 rotate-0'
                )}></div>
            </div>

            <span className='block leading-[0.80] lg:ml-6 self-end md:hidden'>
              Menu
            </span>
          </button>
        </div>
      </header>
      <nav
        className='menu h-dvh bg-secondary fixed w-full top-0 left-0 right-0 z-20  
      [clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)] mt-nav-height'>
        <div className='lg:py-10 pb-4 h-screen-height flex-col flex items-center w-full relative'>
          <ul className='h-fit flex-col flex lg:md:space-y-16 items-center px-4 lg:px-10 pt-10 md:space-y-10 '>
            <li className='overflow-hidden'>
              <NavLink
                href='/'
                className='text-tertiary lg:title-md title-lg link-target block'
                matchedClass='hover:text-secondary text-primary'
                unmatchedClass='text-white hover:text-primary transition-colors ease-in duration-200'>
                Home
              </NavLink>
            </li>
            <li className='overflow-hidden'>
              <NavLink
                href='/story'
                className='text-tertiary lg:title-md title-lg link-target block'
                matchedClass='hover:text-secondary text-primary'
                unmatchedClass='text-white hover:text-primary transition-colors ease-in duration-200'>
                Our Story
              </NavLink>
            </li>
            <li className='overflow-hidden'>
              <NavLink
                href='/menu'
                className='text-tertiary lg:title-md title-lg link-target block'
                matchedClass='hover:text-secondary text-primary'
                unmatchedClass='text-white hover:text-primary transition-colors  ease-in duration-200'>
                Menu
              </NavLink>
            </li>
            <li className='overflow-hidden'>
              <NavLink
                href='/contact'
                className='text-tertiary lg:title-md title-lg link-target block'
                matchedClass='hover:text-secondary text-primary'
                unmatchedClass='text-white hover:text-primary transition-colors ease-in duration-200'>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className='absolute bottom-0 w-full'>
            <div className='w-full mx-auto  overflow-hidden shrink-0'>
              <Icons.doodleLine className='fill-tertiary w-full block' />
            </div>
            <div className='flex w-full px-4 lg:px-10 py-6 justify-between'>
              <div className='flex gap-16 lg:justify-end md:hidden'>
                <Icons.tikTok className='lg:w-6 lg:h-6 block fill-tertiary' />
                <Icons.instagram className='lg:w-6 lg:h-6 block fill-tertiary' />
                <Icons.x className='lg:w-5 lg:h-5 block fill-tertiary' />
              </div>
              <ul className='flex lg:gap-12 md:justify-between md:w-full'>
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
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavHeader;
