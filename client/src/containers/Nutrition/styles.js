import { styled } from '@mui/system';
import { Typography, Box, Grid } from '@mui/material';

export const NutritionSection = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.warning.main,
  padding: '5.5rem 0',
}));

export const ContentContainer = styled(Grid)({
  maxWidth: '120rem',
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Subheader = styled(Typography)`
  font-family: 'open Sans', sans-serif;
  font-size: 1.8rem;
  max-width: 60rem;
  text-align: center;
  margin: 0 auto;
  padding: 7.5rem 0;
`;

export const Pizza = styled('img')({
  margin: '0 auto',
  display: 'block',
  width: '100%',
});

export const PizzaContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3rem',
});

export const Nutrition = styled(Grid)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10rem',

  [theme.breakpoints.down('md')]: {
    width: '30rem',
  },
}));

export const BangImg = styled('img')({
  height: '4rem',
  margin: 0,
});

export const Container = styled(Box)({
  width: '6.5rem',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const HeadingWrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  maxWidth: '65rem',
  padding: '0 1rem',
  fontFamily: 'Thunder',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'Thunder',
  fontSize: '9.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  [theme.breakpoints.down('md')]:{
    fontSize: '6.4rem',
  }
}));

export const HeadingContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '& > :nth-of-type(1)': {
    transform: 'matrix(0.996195,0.081557,-0.081557,0.996195,-32.8364,-10.7477)',
  },
  '& > :nth-of-type(2)': {
    transform:
      'matrix(0.996195, 0.0871557, -0.0871557, 0.996195, -15.8364, -3.7477)',
  },
});

export const HeadingSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'calc(.8rem + 1.5vw)',
});
