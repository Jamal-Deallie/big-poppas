import { useEffect, useRef, useLayoutEffect } from 'react';
import {
  TextWrapper,
  ScrollWrapper,
  Outline,
  ScrollContainer,
  SmileyFace,
  SmileyContainer,
  ContentContainer,
} from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useArrayRef from '../../hooks/useArrayRef';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { rotationAnimation } from '../../animations/rotate';
import { Box } from '@mui/material';

export default function TextScroll({ children }) {
  const scrollWrapper = useRef(null);
  const [wrappers, setWrapper] = useArrayRef();
  const [smileyFace, setSmileyFace] = useArrayRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let animation;
    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 850px)': function () {
        animation = gsap.to([wrappers.current], {
          x: (_, el) => -(el.scrollWidth - window.innerWidth),
          scrollTrigger: {
            trigger: scrollWrapper.current,
            start: 'top top',
            end: 'bottom top',
            end: '400%',
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      },
    });
    return () => {
      animation.kill();
    };
  }, [wrappers.current]);

  useEffect(() => {
    rotationAnimation(smileyFace.current);
  }, [smileyFace]);

  return (
    <Box sx={{ position: 'relative' }}>
      <ScrollContainer ref={scrollWrapper}>
        <ScrollWrapper>
          <TextWrapper ref={setWrapper}>
            <SmileyContainer>
              <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
            </SmileyContainer>
            I <Outline>LOVE </Outline> It When You call me
            <Outline> Big Poppa</Outline>
            <SmileyContainer>
              <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
            </SmileyContainer>
            I <Outline>LOVE </Outline>
            It When You call me
            <Outline> Big Poppa</Outline>
            <SmileyContainer>
              <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
            </SmileyContainer>
          </TextWrapper>
          <ContentContainer>{children}</ContentContainer>
          <TextWrapper ref={setWrapper}>
            <SmileyContainer>
              <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
            </SmileyContainer>
            It's <Outline>All </Outline>Good Baby
            <Outline> Baby</Outline>
            <SmileyContainer>
              <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
            </SmileyContainer>
            It's <Outline>All </Outline>Good Baby
            <Outline> Baby</Outline>
            <SmileyContainer>
              <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
            </SmileyContainer>
            It's <Outline>All </Outline>Good Baby
            <Outline> Baby</Outline>
            <SmileyContainer>
              <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
            </SmileyContainer>
            It's <Outline>All </Outline>Good Baby
            <Outline> Baby</Outline>
            <SmileyContainer>
              <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
            </SmileyContainer>
          </TextWrapper>
        </ScrollWrapper>
      </ScrollContainer>
    </Box>
  );
}
