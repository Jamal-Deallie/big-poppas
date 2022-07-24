import { styled } from '@mui/system';
import { Typography, Box, Grid } from '@mui/material';

export const NutritionSection = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.warning.main,
  padding: '10.5rem 0',
}));

export const ContentContainer = styled(Grid)({
  maxWidth: '120rem',
  margin: '0 auto',
  height: '65vh',
});

export const Heading = styled(Typography)`
  font-family: Thunder;
  font-size: 6rem;
  font-weight: bold;

  max-width: 70rem;
  margin: 0 auto;
  & span {
    position: relative;
    color: #d14334;
  }
`;

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
  height: '65vh',
});

export const PizzaContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Nutrition = styled(Grid)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10rem',
});

export const BangImg = styled('img')({
  height: '4rem',
  margin: 0,
});

export const Container = styled(Box)({
  width: '6.5rem',
  margin: '0 auto',
});
