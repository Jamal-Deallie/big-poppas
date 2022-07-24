import { styled } from '@mui/material/styles';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';


export const Subheader = styled(Typography)`
  font-family: 'open Sans', sans-serif;
  font-size: 1.8rem;
  max-width: 60rem;
  text-align: center;
  margin: 0 auto;
  padding: 7.5rem 0;
`;

export const ContactSection = styled(Box)(({ theme }) => ({
  background: theme.palette.warning.main,
  padding: '10rem 0',
  width: '100%',
}));

export const Image = styled('img')`
  margin: 2rem 0 0 3rem;
  width: 100%;
`;

export const ContactWrap = styled('div')`
  max-width: 140rem;
  margin: 0 auto;
`;

export const GridItem = styled(Grid)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;


