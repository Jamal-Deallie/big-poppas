import { styled } from '@mui/system';
import { Grid, Typography, Button } from '@mui/material';

export const PizzaOfTheMonthSection = styled('section')(({ theme }) => ({
  width: '100%',
  background: theme.palette.secondary.main,
  padding: '5.5rem 0',
}));

export const Pizza = styled('img')({ width: '45rem' });

export const Wrapper = styled('div')`
  margin: 0 auto;
  max-width: 130rem;
  padding: 1rem;
`;

export const Subheader = styled(Typography)`
  margin-top: 7.5rem;
  font-family: Thunder;
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  font-weight: bold;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  color: #1c1c1c;
`;

export const Outline = styled('span')(({ theme }) => ({
  WebkitTextStroke: `0.2rem ${theme.palette.warning.main}`,
  WebkitTextFillColor: theme.palette.secondary.main,
}));

export const Text = styled(Typography)`
  font-family: 'open Sans', sans-serif;
  font-size: 1.8rem;
  max-width: 60rem;
  margin-bottom: 7.5rem;
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

export const GridSection = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: calc(0.8rem + 1.5625vw);
`;
