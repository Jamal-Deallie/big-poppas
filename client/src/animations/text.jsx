import { useRef, useEffect, useMemo, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Box } from '@mui/material';
import useRefSelector from '../hooks/useRefSelector';
import { useEnhancedEffect } from '../hooks/useEnhancedEffect';

export default function TextAnimation({ children, id }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    let storyLineSplit = new SplitText(q(`#${id}-text`), {
      type: 'lines',
    });

    tl.current = gsap.timeline({
      onComplete() {
        storyLineSplit.revert();
      },
    });

    const flexAnimation = tl.current.fromTo(
      storyLineSplit.lines,
      { y: 40, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power4.out',
        overflow: 'hidden',
      }
    );

    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      end: 'bottom',
      animation: flexAnimation,
    });

    return () => {
      flexAnimation.progress(1); // reverts the SpliText in the onComplete
      st.kill();
    };
  }, []);

  return <Box ref={ref}>{children}</Box>;
}
