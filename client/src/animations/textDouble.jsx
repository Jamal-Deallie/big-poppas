import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useArrayRef from '../hooks/useArrayRef';

export default function TextDouble({ textLines, variant }) {
  const tl = useRef();
  const ref = useRef();
  const [subLine, setSubLine] = useArrayRef();
  const [trailLine, setTrailLine] = useArrayRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // let subLine = gsap.utils.toArray('#subline');
    // let trailLine = gsap.utils.toArray('#trail');
    tl.current = gsap.timeline();

    const doubleTextAnimation = tl.current
      .fromTo(
        trailLine.current,
        //   { y: 80, opacity: 0 },
        { y: '120%', opacity: 0 },
        {
          duration: 1,
          // y: 0,
          y: '0%',
          opacity: 1,
          // stagger: 0.1,
          ease: 'power4.out',
          overflow: 'hidden',

          // ease: 'power4.out',
          stagger: 0.2,
        }
      )

      .fromTo(
        subLine.current,
        //   { y: 80, opacity: 0 },
        { y: '120%', opacity: 0 },
        {
          // y: 0,
          y: '0%',
          opacity: 1,
          // stagger: 0.1,
          ease: 'power4.out',
          overflow: 'hidden',
          duration: 1.2,
          // ease: 'power4.out',
          stagger: 0.2,
        },
        '-=-0.5'
      );
    // .to(
    //   trailLine.current,

    //   { duration: 0.2, opacity: 0 }
    // );
    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      end: 'bottom',
      animation: doubleTextAnimation,
      markers: true,
    });
    return () => {
      st.kill();
    };
  }, [tl, ref, subLine, trailLine]);

  return (
    <Box
      ref={ref}
      sx={{
        // height: '100vh',
        // width: '100%',
        // padding: '10rem 7.5rem',
        position: 'relative',
      }}>
      <Box sx={{ margin: '0 auto' }}>
        <Typography id='test-text' variant={variant}>
          {textLines.map(lines => {
            const { text, clrSub, clrTrail, id } = lines;
            return (
              <Box
                key={id}
                sx={{
                  textAlign: 'center',
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                }}>
                <Box
                  ref={setTrailLine}
                  id='trail'
                  sx={{
                    lineHeight: 1,
                    color: clrTrail,
                    position: 'absolute',
                    textAlign: 'center',
                    top: 0,
                    left: 0,
                    width: '100%',

                    fontSize: '3.2rem',
                  }}>
                  {text}
                </Box>
                <Box
                  ref={setSubLine}
                  id='subline'
                  sx={{
                    lineHeight: 1,
                    color: clrSub,
                    position: 'relative',
                    textAlign: 'center',
                    fontSize: '3.2rem',
                  }}>
                  {text}
                </Box>
              </Box>
            );
          })}

          {/* {secondLine && (
            <Box
              sx={{
                textAlign: 'center',
                position: 'relative',
                display: 'block',
                width: '100%',
              }}>
              <Box
                ref={setTrailLine}
                id='trail'
                sx={{
                  fontFamily: 'Thunder, sans-serif',
                  fontSize: '16.4rem',
                  lineHeight: 1,
                  color: clrTrail,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                }}>
                {secondLine}
              </Box>
              <Box
                ref={setSubLine}
                id='subline'
                sx={{
                  fontFamily: 'Thunder, sans-serif',
                  fontSize: '16.4rem',
                  lineHeight: 1,
                  color: clrSub,
                  position: 'relative',
                }}>
                {secondLine}
              </Box>
            </Box>
          )}
          {thirdLine && (
            <Box
              sx={{
                textAlign: 'center',
                position: 'relative',
                display: 'block',
                width: '100%',
              }}>
              <Box
                ref={setTrailLine}
                id='trail'
                sx={{
                  fontFamily: 'Thunder, sans-serif',
                  fontSize: '16.4rem',
                  lineHeight: 1,
                  color: clrTrail,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                }}>
                {thirdLine}
              </Box>
              <Box
                ref={setSubLine}
                id='subline'
                sx={{
                  fontFamily: 'Thunder, sans-serif',
                  fontSize: '16.4rem',
                  lineHeight: 1,
                  color: clrSub,
                  position: 'relative',
                }}>
                {thirdLine}
              </Box>
            </Box>
          )} */}
        </Typography>
      </Box>
    </Box>
  );
}
