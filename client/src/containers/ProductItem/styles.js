import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const ProductItemSection = styled('section')(({ theme }) => ({
  padding: '12.5rem 10rem',
  background: theme.palette.primary.main,
}));

export const GridSection = styled('section', {
  shouldForwardProp: prop => prop !== '$color',
})(({ theme, $color }) => ({}));

export const Text = styled(Typography, {
  shouldForwardProp: prop => prop !== '$fontSz',
})(({ theme, $fontSz }) => ({
  padding: '0 1rem',
  fontSize: $fontSz ? $fontSz : '1.6rem',
  wordSpacing: '.2rem',
  fontWeight: 600,
  color: theme.palette.secondary.main,
}));

export const Heading = styled(Typography, {
  shouldForwardProp: prop => prop !== '$fontSz',
})(({ theme, $fontSz }) => ({
  padding: '0 1rem',
  fontSize: $fontSz ? $fontSz : '3.6rem',
  wordSpacing: '.2rem',
  fontWeight: 600,
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
}));

export const IconContainer = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.main,
  height: '3.5rem'
}));

export const StarIcon = styled(('img'))({
    
})