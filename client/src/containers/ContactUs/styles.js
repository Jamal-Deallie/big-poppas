import { styled } from '@mui/material/styles';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

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

export const CustomLink = styled(Link, {
  shouldForwardProp: prop => prop !== '$dn',
})(({ theme, $dn }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.6rem',
  fontWeight: 400,
  cursor: 'pointer',
  fontFamily: 'open Sans, sans-serif',
  textTransform: 'capitalize',
  transition: 'all opacity color .2s ease',
  position: 'relative',
  display: 'inline-block',
  padding: '3px 0',
  '&:hover': {
    color: theme.palette.secondary.light,
  },
}));
