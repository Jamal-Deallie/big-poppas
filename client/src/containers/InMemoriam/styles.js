import { styled } from '@mui/system';
import { Typography, Container, Grid } from '@mui/material';

export const Section = styled('section')`
  background: #1c1c1c;
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
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  font-weight: bold;
  line-height: 10rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  color: #e9e7dc;
  text-align: center;
  margin-bottom: 7.5rem;
`;

export const Outline = styled('span')`
  -webkit-text-stroke: 0.15rem #d14334;
  -webkit-text-fill-color: #1c1c1c;
`;


export const Text = styled(Typography)`
  font-size: 1.8rem;
  color: #e9e7dc;
  max-width: 55rem;
`;

export const Image = styled('img')`
  max-height: 55rem;
  mask-image: linear-gradient(to right, transparent 3%, black 100%);
  @media screen and (max-width: 1024px) {
    -webkit-mask-image: linear-gradient(to bottom, transparent 1%, black 22%);
    mask-image: linear-gradient(to bottom, transparent -10%, black 100%);
  }
`;

export const Wrap = styled('div')`
  max-width: 130rem;
  margin: 0 auto;
`;

export const GridContainer = styled(Grid)`

`;

export const GridItem = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
`;
