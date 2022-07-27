import { useRef, useEffect, useMemo, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Box } from '@mui/material';
import useRefSelector from '../hooks/useRefSelector';

export default function AboutAnimation({ children }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    ScrollTrigger.saveStyles('#about-text');
    ScrollTrigger.saveStyles(q('#about-heading'));
    ScrollTrigger.saveStyles(q('#about-image'));
    ScrollTrigger.saveStyles(ref.current);

    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 850px)': function () {
        let targets = gsap.utils.toArray('#about-text');
        let headingTargets = gsap.utils.toArray('#about-heading');

        let lineSplit = new SplitText(targets, {
          type: 'lines',
        });

        tl.current = gsap.timeline({
          onComplete() {
            // wordSplit.revert();
            lineSplit.revert();
          },
        });

        // gsap.set(lineSplit.lines, { y: 40, opacity: 0 });
        const contentAnimation = tl.current
          .fromTo(
            headingTargets,
            { opacity: 0, y: 100 },
            {
              delay: 1,
              y: 0,
              opacity: 1,
              autoAlpha: 1,
              duration: 1,
              stagger: 0.3,
              ease: 'power4.out',
            }
          )
          .fromTo(
            q('#about-image'),
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            {
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
              ease: 'power3.in',
              duration: 0.7,
            }
          )

          .fromTo(
            lineSplit.lines,
            { y: 40, autoAlpha: 0 },
            {
              duration: 0.7,
              y: 0,
              autoAlpha: 1,
              stagger: 0.1,
              ease: 'power4.out',
              overflow: 'hidden',
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
          contentAnimation.progress(1); // reverts the SplitText in the onComplete
          st.kill();
        };
      },
    });
  }, [tl, q, ref]);

  return <Box ref={ref}>{children}</Box>;
}
