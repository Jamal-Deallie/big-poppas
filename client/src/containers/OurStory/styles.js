import { styled } from '@mui/system';
import { Container, Typography, Grid, Button, Box } from '@mui/material';

export const StorySection = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: 'calc(.8rem + 1.5vw)',
  },
}));

export const HeadingContainer = styled(Container)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('md')]: {
    display: 'block',
    marginTop: '3.5rem',
  },
}));

export const Image = styled('img')({
  maxHeight: '45rem',
  maskImage: 'linear-gradient(to top, transparent 1%, black 45%)',
});

export const ImageWrapper = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    paddingTop: '5.5rem',
  },
}));

export const GridContainer = styled(Grid)({
  margin: '0 auto',
  padding: '1rem',
  maxWidth: '120rem',
  alignItems: 'center',
});

export const StyledButton = styled(Button)`
  font-family: 'open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #e9e7dc;
  cursor: pointer;
  border: 3px solid;
  padding: 1.2rem 1rem;
  background: #1c1c1c;
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

export const Heading = styled(Typography)`
  font-family: Thunder;
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  font-weight: bold;
  line-height: 1;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  color: #e9e7dc;
  text-align: center;
  margin-bottom: 3.5rem;
  max-width: 60rem;
`;

export const Outline = styled('span')`
  -webkit-text-stroke: 0.15rem #d14334;
  -webkit-text-fill-color: #1c1c1c;
`;
