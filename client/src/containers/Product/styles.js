import { styled } from '@mui/system';
import { Container, Typography, Button } from '@mui/material';

export const ProductSection = styled('div')`
  padding: 10.5rem 0;
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

export const ItemContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

export const HeadingContainer = styled(Container)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 'calc(.8rem + 1.5625vw)',
});
