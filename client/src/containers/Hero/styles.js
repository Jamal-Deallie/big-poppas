import { styled } from '@mui/system';
import { Typography, Button, Grid } from '@mui/material';

export const Wrap = styled('div')`
  max-width: 150rem;
  margin: 0 auto;
  padding: 7.5rem 0;
`;

export const StyledSection = styled('section')`
  background: #d14334;
  width: 100%;
  padding: 5rem 1rem;
`;

export const StyledHeading = styled(Typography)`
  font-family: Thunder;
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  padding: 1rem;
  line-height: 1;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  width: 20ch;

  & span {
    position: relative;
    color: #e9e7dc;
  }
`;

export const Outline = styled('span')`
  -webkit-text-stroke: 0.15rem black;
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
  padding: 1rem;
  filter: brightness(95%);
`;

export const GridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
