import { styled } from '@mui/system';
import { Typography, Button, Grid, Box } from '@mui/material';

export const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: '150rem',
  padding: '10.5rem calc(1rem + 1.5625vw)',
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: 'calc(1rem + 1.5625vw)',
  },
}));

export const StyledSection = styled('section')(({ theme }) => ({
  background: theme.palette.warning.main,
  width: '100%',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'Thunder, sans-serif',
  fontSize: 'clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem)',
  lineHeight: 1,
  letterSpacing: '0.25rem',
  textTransform: 'uppercase',
  fontWeight: 400,
  WebkitFontSmoothing: 'subpixel-antialiased',
  WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.1)',
  WebkitTextFillColor: theme.palette.primary.main,
  display: 'block',
  '& span': {
    color: theme.palette.secondary.main,
    WebkitTextStroke: `.15rem ${theme.palette.primary.main}`,
    WebkitTextFillColor: theme.palette.warning.main,
    WebkitFontSmoothing: 'subpixel-antialiased',
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontSize: '1.6rem',
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  lineHeight: 1.2,
  padding: '1rem 4rem',
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '8px',
  boxSizing: 'border-box',
  boxShadow:
    '1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,5px 5px 0px 0px',
  '&:hover': {
    backgroundColor: '#ffffff',
    color: theme.palette.warning.main,
    boxShadow: 'none',
  },
}));

// export const StyledButton = styled(Button)`
//   font-family: 'open Sans', sans-serif;
//   font-size: 16px;
//   letter-spacing: 2px;
//   text-decoration: none;
//   text-transform: uppercase;
//   color: #1c1c1c;
//   cursor: pointer;
//   border: 3px solid;
//   padding: 1.2rem 1rem;
//   background: #e9e7dc;
//   box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
//     5px 5px 0px 0px;
//   position: relative;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   &:hover {
//     box-shadow: 0px 0px 0px 0px;
//     top: 5px;
//     left: 5px;
//   }
// `;

export const PizzaImage = styled('img')(({ theme }) => ({
  filter: 'brightness(95%)',
  height: '49rem',
  display: 'block',
  [theme.breakpoints.down('md')]: {
    marginTop: '2.5rem',
    height: '39rem',
  },
}));

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
  padding: 'calc(1rem + 1.5625vw)',
});

export const TextContainer = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  width: '60rem',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: '2.5rem 0',
  },
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
}));
