import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

export const Heading = styled(Typography)`
  font-family: Thunder;
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  font-weight: bold;
  line-height: 10rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  color: #d14334;
  text-align: center;
  margin-bottom: 7.5rem;
`;

export const FeaturedSection = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.secondary.main,
  padding: '5.5rem 0',
}));

export const Outline = styled('span')`
  -webkit-text-stroke: 0.15rem #1c1c1c;
  -webkit-text-fill-color: #e9e7dc;
`;

