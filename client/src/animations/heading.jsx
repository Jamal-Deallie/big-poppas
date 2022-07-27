import { useRef, useEffect, useMemo, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box } from '@mui/material';
import useRefSelector from '../hooks/useRefSelector';

export default function HeadingAnimation({ id, children }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.saveStyles(q(`#${id}-heading`));
    ScrollTrigger.saveStyles(ref.current);

    ScrollTrigger.matchMedia({
      '(min-width: 850px)': function () {
        tl.current = gsap.timeline();
        let headingTargets = gsap.utils.toArray(`#${id}-heading`);

        const contentAnimation = tl.current.fromTo(
          headingTargets,
          { opacity: 0, y: 100 },
          {
            delay: 0.5,
            y: 0,
            opacity: 1,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.3,
            ease: 'power4.out',
          }
        );

        let st = gsap.to(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top center',
            end: 'bottom',
            animation: contentAnimation,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          st.kill();
        };
      },
    });
  }, [tl, q, ref, id]);

  return <Box ref={ref}>{children}</Box>;
}
