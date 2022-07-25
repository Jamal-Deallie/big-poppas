import { styled } from '@mui/system';
import { Typography, Button, Grid, Box } from '@mui/material';

export const Wrap = styled('div')`
  max-width: 150rem;
  margin: 0 auto;
  padding: 7.5rem 0;
`;

export const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: '150rem',
  padding: '10.5rem calc(1rem + 1.5625vw)',
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: 'calc(1rem + 1.5625vw)',
  },
}));

export const StyledSection = styled('section')`
  background: #d14334;
  width: 100%;
`;

export const StyledHeading = styled(Typography)`
  font-family: Thunder;
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  line-height: 1;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  font-weight: 400;
  & span {
    color: #e9e7dc;
  }
`;

export const Outline = styled('span')`
  -webkit-text-stroke: 0.2rem black;
  -webkit-text-fill-color: #d14334;
`;
export const StyledButton = styled(Button)`
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

export const Image = styled('img')`
  filter: brightness(95%);
  height: 49rem;
  display: block;
  margin: 0 auto;
`;

export const GridItem = styled(Grid)({
  padding: 'calc(1rem + 1.5625vw)',
  width: '100%',
});

export const GridContainer = styled(Grid)({
  width: '100%',
  margin: '0 auto',
});

export const GridImage = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const TextContainer = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  width: '60rem',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
