import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

export const Text = styled(Typography)`
  color: #e9e7dc;
  font-size: 1.6rem;
  text-align: center;
`;

export const Icon = styled('img')`
  width: 100%;
`;

export const IconWrap = styled(Container)`
  width: 9.5rem;
`;

export const Subheader = styled(Typography)`
  padding-top: 7.5rem;
  font-family: Thunder;
  font-size: 3.2rem;
  font-style: normal;
  font-variant: normal;
  letter-spacing: normal;
  text-align: center;
  color: #e9e7dc;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
`;

export const Title = styled(Typography)`
  font-family: open-sans, sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-variant: normal;
  letter-spacing: normal;
  text-align: center;
  color: #e9e7dc;
`;

export const SocialContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 35rem;
  margin: 0 auto;
  padding-top: 7.5rem;
`;

export const ContactContainer = styled(Grid)`
  max-width: 140rem;
  margin: 0 auto;
`;

export const ContactDetailsSection = styled('div')`
  background: #1c1c1c;
  width: 100%;
  padding: 15rem 0;
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
`;

export const Outline = styled('span')`
  -webkit-text-stroke: 0.15rem #d14334;
  -webkit-text-fill-color: #1c1c1c;
`;

export const GridItem = styled(Grid)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
`;
