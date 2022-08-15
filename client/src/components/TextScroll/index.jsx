import { useEffect, useRef, useLayoutEffect } from 'react';
import {
  TextWrapper,
  ScrollWrapper,
  Outline,
  Text,
  SmileyFace,
  SmileyContainer,
  ContentContainer,
} from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useArrayRef from '../../hooks/useArrayRef';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { rotationAnimation } from '../../animations/rotate';
import { Box, Typography } from '@mui/material';
import { horizontalLoop } from '../../animations/horizontalLoop';

export default function TextScroll({ children }) {
  const scrollWrapper = useRef(null);
  const [wrappers, setWrapper] = useArrayRef();
  const [smileyFace, setSmileyFace] = useArrayRef();

  useEffect(() => {
    const config = {
      draggable: false,
      center: false,
      speed: 1,
      reversed: false,
      repeat: -1,
      snap: false,
    };
    horizontalLoop(wrappers.current, config);
  }, [horizontalLoop]);

  useEffect(() => {
    rotationAnimation(smileyFace.current);
  }, [smileyFace]);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'primary.main',
      }}>
      <TextWrapper
        sx={{
          width: '150%',
          position: 'relative',
          gap: '2rem',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        {Array.from(Array(10), (_, x) => {
          return (
            <Box
              key={x}
              ref={setWrapper}
              sx={{
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
        
              }}>
              <SmileyContainer>
                <SmileyFace src='images/smiley_face.svg' ref={setSmileyFace} />
              </SmileyContainer>
              <Text>
                I <Outline>LOVE </Outline> It When You call me
                <Outline> Big Poppa</Outline>
              </Text>
            </Box>
          );
        })}
      </TextWrapper>

      <ContentContainer>{children}</ContentContainer>
      {/* <Box>
        <TextWrapper
          sx={{
            width: '150%',
            position: 'relative',
            gap: '2rem',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          {Array.from(Array(10), (_, x) => {
            return (
              <Box
                key={x}
                ref={setWrapper}
                sx={{
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <SmileyContainer>
                  <SmileyFace
                    src='images/smiley_face.svg'
                    ref={setSmileyFace}
                  />
                </SmileyContainer>
                <Text>
                  It's <Outline>All</Outline> Good Baby
                  <Outline> Baby</Outline>
                </Text>
              </Box>
            );
          })}
        </TextWrapper>
      </Box> */}
    </Box>
  );
}
