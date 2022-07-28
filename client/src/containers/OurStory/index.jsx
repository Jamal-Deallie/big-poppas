import {
  StorySection,
  HeadingContainer,
  Heading,
  Outline,
  Image,
  ImageWrapper,
  GridContainer,
  GridText,
} from './styles';
import { Grid, Typography, Box, Button } from '@mui/material';
import { TextScroll } from '../../components';
import TextAnimation from '../../animations/text';
import ImageAnimation from '../../animations/image';

export default function OurStoryContainer() {
  return (
    <TextScroll>
      <StorySection>
        <HeadingContainer>
          <Heading>
            I <Outline>LOVE</Outline> It When You call me
            <Outline> Big Poppa</Outline>
          </Heading>
        </HeadingContainer>
        <GridContainer container>
          <ImageWrapper item md={6}>
            <ImageAnimation id='story' sx={{ padding: 'calc(.8rem + 1.5vw)' }}>
              <Image
                id='story-image'
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1658723444/big_poppas/story-pizza.webp'
                alt='woman holding a pizza'
              />
            </ImageAnimation>
          </ImageWrapper>
          <GridText item md={6} sx={{ padding: 'calc(.8rem + 1.5vw)' }}>
            <TextAnimation id='story'>
              <Typography variant='body3' id='story-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </TextAnimation>

            <Box>
              <Button variant='secondary' sx={{ mt: '5.5rem' }}>
                Learn More
              </Button>
            </Box>
          </GridText>
        </GridContainer>
      </StorySection>
    </TextScroll>
  );
}
