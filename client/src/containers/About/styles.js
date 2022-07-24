import { styled } from '@mui/system';
import { Typography, Container, Grid } from '@mui/material';

export const AboutSection = styled('section')`
  background: #d14334;
  width: 100%;
  padding: 12.5rem 0;
`;

export const HeadingContainer = styled(Container)`
  position: relative;
  height: 10rem;
`;

export const Spots = styled('img')`
  height: 100%;
`;

export const Heading = styled(Typography)`
  font-family: Thunder;
  font-size: 6.5rem;
`;

export const Text = styled(Typography)`
  font-size: 1.8rem;
  &:nth-of-type(1) {
    margin-bottom: 3.5%;
  }
`;

export const Image = styled('img')`
  max-height: 60rem;
  object-fit: cover;
  filter: grayscale(100%);
`;

export const Wrap = styled('div')`
  max-width: 140rem;
  margin: 0 auto;
`;

export const GridContainer = styled(Grid)`
  padding-top: 7.5rem;
`;
