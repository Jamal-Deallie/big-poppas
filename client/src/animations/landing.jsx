import { useRef, useEffect, useMemo, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Box } from '@mui/material';

export default function LandingAnimation({ children, link, id }) {
  function useSelector() {
    const ref = useRef();
    const q = useMemo(() => gsap.utils.selector(ref), [ref]);
    return [q, ref];
  }

  const tl = useRef();
  const [q, ref] = useSelector();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    ScrollTrigger.saveStyles(q('#landing-text'));
    // ScrollTrigger.saveStyles(q('#landing-heading'));
    ScrollTrigger.saveStyles(q('landing-image'));
    ScrollTrigger.saveStyles(q('landing-button'));
    ScrollTrigger.saveStyles(ref.current);

    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 850px)': function () {
        let lineSplit = new SplitText(q('#landing-text'), {
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
            q('#landing-image'),
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            {
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
              ease: 'power3.in',
              duration: 0.7,
              scale: 1.1,
            }
          )
          .fromTo(
            '#landing-heading',
            { autoAlpha: 0 },
            {
              duration: 1,
              y: 0,
              autoAlpha: 1,
              ease: 'power4.out',
              overflow: 'hidden',
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
          )
          .fromTo(
            '#landing-button',
            { autoAlpha: 0 },
            {
              duration: 0.7,
              y: 0,
              autoAlpha: 1,

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
  }, [tl, q, ref, id, link]);

  return <Box ref={ref}>{children}</Box>;
}
