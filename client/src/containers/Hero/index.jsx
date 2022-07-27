import {
  StyledSection,
  GridItem,
  PizzaImage,
  GridContainer,
  InnerContainer,
  TextContainer,
  GridImage,
  Heading,
} from './styles';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui//material';
import LandingAnimation from '../../animations/landing';

export default function HeroContainer() {
  return (
    <LandingAnimation>
      <StyledSection>
        <InnerContainer>
          <GridContainer container spacing={2}>
            <GridItem item md={7}>
              <Heading id='landing-heading'>
                We <span>love </span>the dough more than you know
              </Heading>

              <TextContainer>
                <Typography id='landing-text'>
                  Fusce ut placerat orci nulla. Vel eros donec ac odio tempor
                  orci dapibus ultrices. Ligula ullamcorper malesuada proin
                  libero nunc consequat. Aliquam faucibus purus in massa tempor
                  nec feugiat nisl. Lorem mollis aliquam ut porttitor leo a diam
                  sollicitudin.
                </Typography>
              </TextContainer>

              <Link to='menu' id='landing-button'>
                <Button
                  sx={{ mt: '2.5rem' }}
                  variant='main'
                  id='landing-button'>
                  Order Now
                </Button>
              </Link>
            </GridItem>
            <GridImage item md={5}>
              <PizzaImage
                id='landing-image'
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1650781604/big_poppas/bp-landing_jqwmnr.webp'
                alt='Landing Pizza Image'
              />
            </GridImage>
          </GridContainer>
        </InnerContainer>
      </StyledSection>
    </LandingAnimation>
  );
}
