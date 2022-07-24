import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

export const Heading = styled(Typography)`
  font-family: Thunder;
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  font-weight: bold;
  line-height: 10rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  color: #e9e7dc;
  text-align: center;
  margin-bottom: 5.5rem;
  text-align: center;
  display: block;
`;

export const Outline = styled('span')`
  -webkit-text-stroke: 0.15rem #d14334;
  -webkit-text-fill-color: #1c1c1c;
`;

export const MapSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  width: '100%',
  padding: '10rem 0',
}));

export const Map = styled('img')`
  padding-top: 7.5rem;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  height: 70rem;
`;

export const Text = styled(Typography)`
  font-size: 1.8rem;
  color: #e9e7dc;
  text-align: center;
`;

export const MapInner = styled(Box)({
  margin: '0 auto',
  padding: 'calc(.8rem - 1.5vw)',
});
