import { useRef, useLayoutEffect } from 'react';
import {
  StyledSection,
  StyledHeading,
  StyledButton,
  Outline,
  GridItem,
  Image,
  GridContainer,
  InnerContainer,
  TextContainer,
  GridImage,
} from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Link } from 'react-router-dom';
import { Typography } from '@mui//material';

export default function HeroContainer() {
  const tl = useRef();
  const containerRef = useRef();
  const headerRef = useRef();
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    ScrollTrigger.saveStyles(containerRef.current);
    ScrollTrigger.saveStyles('#landing-button');
    ScrollTrigger.saveStyles('#landing-heading');
    ScrollTrigger.saveStyles('#landing-text');
    let st;
    let contentAnimation;
    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 800px)': function () {
        // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...

        const lineSplit1 = new SplitText('#landing-heading', {
          type: 'chars, words',
        });

        const lineSplit2 = new SplitText('#landing-text', {
          type: 'lines',
        });

        tl.current = gsap.timeline({
          onComplete() {
            lineSplit1.revert();
            lineSplit2.revert();
          },
        });

        // other animations that aren't ScrollTrigger-related...
        contentAnimation = tl.current
          .fromTo(
            '#landing-image',
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            {
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
              ease: 'power3.in',
              duration: 0.7,
              scale: 1.1,
            }
          )
          .fromTo(
            lineSplit1.chars,
            { y: 10, opacity: 0 },
            {
              duration: 0.8,
              opacity: 1,
              y: 0,
              ease: 'circ.out',
              stagger: 0.02,
            }
          )
          .fromTo(
            lineSplit2.lines,
            { y: 40, opacity: 0 },
            {
              duration: 1,
              y: 0,
              opacity: 1,
              stagger: 0.1,
              ease: 'power4.out',
            }
          )
          .fromTo(
            '#landing-button',
            { opacity: 0 },
            { opacity: 1, ease: 'sine.in' }
          );
        let st = gsap.to(containerRef.current, {
          ScrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom',
            animation: contentAnimation,
            invalidateOnRefresh: true,
          },
        });

        // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)

        return () => {
          console.log('breakpoint cleanup');
          contentAnimation.progress(1); // reverts the SplitText in the onComplete
          st.kill();
        };
      },
    });
    return () => {
      console.log('component cleanup');
      contentAnimation && contentAnimation.progress(1); // reverts the SplitText in the onComplete
      st && st.refresh();
    };
  }, [tl.current, containerRef.current]);

  return (
    <StyledSection>
      <InnerContainer ref={containerRef}>
        <GridContainer container spacing={2}>
          <GridItem item md={7}>
            <StyledHeading id='landing-heading'>
              We love the <Outline>dough</Outline> more than you
              <Outline> know</Outline>
            </StyledHeading>
            <TextContainer>
              <Typography id='landing-text'>
                Fusce ut placerat orci nulla. Vel eros donec ac odio tempor orci
                dapibus ultrices. Ligula ullamcorper malesuada proin libero nunc
                consequat. Aliquam faucibus purus in massa tempor nec feugiat
                nisl. Lorem mollis aliquam ut porttitor leo a diam sollicitudin.
              </Typography>
            </TextContainer>

            <Link to='menu' id='landing-button'>
              <StyledButton sx={{ mt: '2.5rem' }}>Order Now</StyledButton>
            </Link>
          </GridItem>
          <GridImage item md={5}>
            <Image
              id='landing-image'
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1650781604/big_poppas/bp-landing_jqwmnr.webp'
              alt='Landing Pizza Image'
            />
          </GridImage>
        </GridContainer>
      </InnerContainer>
    </StyledSection>
  );
}
