import { styled } from '@mui/system';
import { Container, Typography, Grid, Button } from '@mui/material';

export const ProductSection = styled('div')`
  padding: 12.5rem 0;
  font-family: Thunder;
  font-size: 8rem;
  width: 100%;
  background: #1c1c1c;
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
  text-align: center;
  display: block;
`;

export const Outline = styled('span')`
  -webkit-text-stroke: 0.15rem #d14334;
  -webkit-text-fill-color: #1c1c1c;
`;

export const Text = styled(Typography)`
  font-family: 'open Sans', sans-serif;
  font-size: 1.8rem;
  max-width: 70rem;
`;

export const ContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeadingContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Crown = styled('img')`
  height: 4rem;
  position: absolute;
  right: 0%;
  top: 0%;
`;

export const Image = styled('img')`
  width: 100%;
  mask-image: linear-gradient(to top, transparent 1%, black 45%);
`;

export const ImageWrapper = styled(Grid)``;

export const Spot = styled('img')`
  height: 5rem;
  position: absolute;
  left: 12%;
  top: 17%;
`;

export const BottomSpot = styled('img')`
  height: 6rem;
  position: absolute;
  right: 45%;
  bottom: 20%;
  transform: rotate(45deg);
`;

export const GridContainer = styled(Grid)`
  margin: 0 auto;
  padding: 10% 5rem;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled('span')``;

export const StyledButton = styled(Button)`
  margin-top: 7.5%;
  font-family: 'open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #1c1c1c;
  cursor: pointer;
  border: 3px solid;
  padding: 1.2rem 1rem;
  background: #e9e7dc;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

export const ProductWrapper = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;


