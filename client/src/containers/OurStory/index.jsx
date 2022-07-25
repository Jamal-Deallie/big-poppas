import {
  StorySection,
  HeadingContainer,
  Heading,
  Outline,
  Image,
  ImageWrapper,
  GridContainer,
  StyledButton,
} from './styles';
import { Grid, Typography, Box } from '@mui/material';
import { TextScroll } from '../../components';

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
        <GridContainer container sx={{ width: '100%' }}>
          <Grid item md={6}>
            <Typography variant='body3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
            <Box>
              <StyledButton sx={{ mt: '5.5rem' }}>Learn More</StyledButton>
            </Box>
          </Grid>
          <ImageWrapper item md={6}>
            <Image src='/images/bp-img-1.png' alt='woman holding a pizza' />
          </ImageWrapper>
        </GridContainer>
      </StorySection>
    </TextScroll>
  );
}
