import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

export const MenuSection = styled(Box)({
  height: '100vh',
  width: '100%',
  display: 'none',
  opacity: 0,
  top: 0,
  zIndex: 10,
  position: 'fixed',
  left: 0,
  right: 0,
});

export const MenuContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  opacity: 1,
  top: 0,
  zIndex: 10,
  position: 'absolute',
  left: 0,
  right: 0,
  backgroundColor: theme.palette.warning.main,
  padding: 'calc(8px + 1.5625vw)',
}));

export const Links = styled(Link, {
  shouldForwardProp: prop => prop !== '$dn',
})(({ theme, $dn }) => ({
  color: theme.palette.primary.main,
  fontSize: '7.75rem',
  fontWeight: 400,
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  position: 'relative',
  fontFamily: 'Thunder, sans-serif',
  overflow: 'hidden',
  lineHeight: 1.2,
  letterSpacing: '.2rem',
  WebkitTextStroke: `0.15rem ${theme.palette.primary.main}`,
  WebkitTextFillColor: theme.palette.warning.main,
  '&:hover': {
    color: theme.palette.secondary.main,
    WebkitTextFillColor: theme.palette.primary.main,
    WebkitTextStroke: 0,
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const Button = styled(Box)({
  position: 'relative',
  cursor: 'pointer',
});

export const Close = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2.4rem',
  fontWeight: '600',
  position: 'relative',
  transition: 'color .2 ease-in-out',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

export const LinkContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  flexDirection: 'column',
  maxWidth: '140rem',
  height: 'auto',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    gap: '1rem',
  },
}));

export const LinkWrap = styled(Box)({
  overflow: 'hidden',
});

export const MenuWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh',
  gap: '2.5rem',
  [theme.breakpoints.down('md')]: {
    marginTop: '5.5rem',
    justifyContent: 'flex-start',
  },
}));

export const IconBar = styled(Box)(({ theme }) => ({
  width: '3.5rem',
  height: '.3rem',
  background: theme.palette.secondary.main,
  borderRadius: '.5rem',
}));

export const ToggleBtn = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    zIndex: 11,
    marginLeft: '2.5rem',
    gap: '.8rem',
    cursor: 'pointer',
    height: '10rem',
    width: '3.5rem',
  },
}));
