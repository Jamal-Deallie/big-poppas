'use client';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { gsap } from '@/utils/gsap';

const Header = () => {
  const root = useRef<HTMLDivElement>(null);
  // store the timeline in a ref.
  const tl = useRef<gsap.core.Timeline>(null!);

  const { contextSafe } = useGSAP(
    () => {
      if (!root.current) return;
      const lines: SVGLineElement[] = gsap.utils.toArray('.menu-btn');
   
      tl.current = gsap
        .timeline()
        .to(lines[0], {
          duration: 0.2,
          x: 52,
          rotation: 45,
        })
        .to(lines[1], { duration: 0.2, alpha: 0 }, 0)
        .to(lines[2], { duration: 0.2, x: 52, rotation: -45 }, 0)
        .to('.menu', {
          duration: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: 'power2.out',
        });
    },
    { scope: root }
  ); // <-- scope for selector text (optional)

  const toggleMenu = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
  });

  return (
    <div ref={root}>
      <nav className='bg-primary w-full menu'>
        {/* <button onClick={toggleTimeline}>Toggle</button> */}
        <button
          onClick={toggleMenu}
          type='button'
          aria-label='toggle curtain navigation '
          className='relative block aspect-[384/276] h-5 cursor-pointer lg:h-8 lg:w-auto'>
          <svg
            className=' relative'
            viewBox='0 0 384 276'
            xmlns='http://www.w3.org/2000/svg'>
            <line
              className='block fill-white stroke-white stroke-[12px] menu-btn'
              x1='16'
              y1='17'
              x2='368'
              y2='17'
              // ref={setRefItems}
            />
            <line
              className='block fill-white stroke-white stroke-[12px] menu-btn'
              x1='16'
              y1='139.2'
              x2='368'
              y2='139.2'
              // ref={setRefItems}
            />
            <line
              className='block fill-white stroke-white stroke-[12px] menu-btn'
              x1='16'
              y1='261'
              x2='368'
              y2='261'
              // ref={setRefItems}
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Header;
