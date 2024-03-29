import { useRef, useEffect, useMemo, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Box } from '@mui/material';
import useRefSelector from '../hooks/useRefSelector';
import { useEnhancedEffect } from '../hooks/useEnhancedEffect';

export default function ImageAnimation({ children, id }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      q(`#${id}-image`),
      { yPercent: 50, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        delay: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
        },
      }
    );
    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <Box ref={ref} sx={{ margin: '0 auto' }}>
      {children}
    </Box>
  );
}
