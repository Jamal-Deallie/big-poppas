import { styled } from '@mui/system';
import { Typography, Divider } from '@mui/material';

export const ProductItemSection = styled('section')(({ theme }) => ({
  padding: '12.5rem 10rem',
  background: theme.palette.primary.main,
}));

export const Text = styled(Typography, {
  shouldForwardProp: prop => prop !== '$fontSz',
})(({ theme, $fontSz }) => ({
  padding: '0 1rem',
  fontSize: $fontSz ? $fontSz : '1.6rem',
  wordSpacing: '.2rem',
  fontWeight: 600,
  color: theme.palette.secondary.main,
  margin: '2rem 0',
}));

export const Heading = styled(Typography, {
  shouldForwardProp: prop => prop !== '$fontSz',
})(({ theme, $fontSz }) => ({
  padding: '0 1rem',
  fontSize: $fontSz ? $fontSz : '4.2rem',
  letterSpacing: '.2rem',
  fontFamily: 'Thunder, sans-serif',
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
}));

export const CustomDivider = styled(Divider)(({ theme }) => ({
  background: theme.palette.secondary.main,
}));
