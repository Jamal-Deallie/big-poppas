import { useEffect, useRef } from 'react';
import {
  TextWrapper,
  ScrollWrapper,
  Outline,
  ScrollContainer,
  SmileyFace,
  SmileyContainer,
} from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useArrayRef from '../../hooks/useArrayRef';
import { rotationAnimation } from '../../animations/rotate';
import { Container } from '@mui/material';

export default function TextScroll({ children }) {
  const scrollWrapper = useRef(null);
  const [wrappers, setWrapper] = useArrayRef();
  const [smileyFace, setSmileyFace] = useArrayRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to([wrappers.current], {
      x: (_, el) => -(el.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: scrollWrapper.current,
        start: 'top top',
        // end: "bottom top",
        end: '400%',
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        markers: true,
      },
    });
  }, [wrappers]);

  useEffect(() => {
    rotationAnimation(smileyFace.current);
  });
  return (
    <ScrollContainer ref={scrollWrapper}>
      <ScrollWrapper>
        <TextWrapper ref={setWrapper}>
          I <Outline>LOVE </Outline> It When You call me
          <Outline> Big Poppa</Outline>
          <SmileyContainer>
            <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
          </SmileyContainer>
          I <Outline>LOVE </Outline>
          It When You call me
          <Outline> Big Poppa</Outline>
        </TextWrapper>
        <Container>{children}</Container>
        <TextWrapper ref={setWrapper}>
          It's <Outline>All </Outline> Good Baby
          <Outline> Baby</Outline>
          <SmileyContainer>
            <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
          </SmileyContainer>
          It's <Outline>All </Outline> Good Baby
          <Outline> Baby</Outline>
          <SmileyContainer>
            <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
          </SmileyContainer>
          It's <Outline>All </Outline> Good Baby
          <Outline> Baby</Outline>
          <SmileyContainer>
            <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
          </SmileyContainer>
          It's <Outline>All </Outline> Good Baby
          <Outline> Baby</Outline>
        </TextWrapper>
      </ScrollWrapper>
    </ScrollContainer>
  );
}
