import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Nav = styled('nav')(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '10rem',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  padding: '0 5rem',
  position: 'relative',
  justifyContent: 'space-between',
  borderBottom: `${theme.palette.secondary.main} 1px solid`,
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    padding: '0 2rem',
  },
}));

export const StyledContainer = styled(Box)({
  width: '100%',
});

export const Logo = styled('img')(({ theme }) => ({
  width: '5rem',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    flex: 'none',
  },
}));

export const NavItems = styled(Box)({
  display: 'flex',
  gap: '5rem',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  flex: 2,
});

export const NavOptions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 'auto',
  gap: '2.5rem',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    gap: '2rem',
  },
}));

export const NavLinks = styled(NavLink, {
  shouldForwardProp: prop => prop !== '$dn',
})(({ theme, $dn }) => ({
  color: theme.palette.secondary.light,
  fontSize: '1.8rem',
  fontWeight: 400,
  cursor: 'pointer',
  fontFamily: 'open Sans, sans-serif',
  textTransform: 'capitalize',
  transition: 'all opacity color .2s ease',
  position: 'relative',
  display: 'inline-block',
  padding: '3px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 'calc(100% + 5px)',
    width: 0,
    right: 0,
    height: '3px',
    transition: 'width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s',
    background: theme.palette.warning.main,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 'calc(100% + 5px)',
    width: 0,
    right: 0,
    height: '3px',
    transition: 'width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)',
    background: theme.palette.secondary.main,
  },
  '&:hover': {
    '&::after': { width: '100%', left: 0 },
    '&::before': { width: '100%', left: 0 },
  },
  '&.active': {
    color: theme.palette.warning.main,
    fontWeight: 600,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const NavOption = styled(Typography, {
  shouldForwardProp: prop => prop !== '$dn',
})(({ theme, $dn }) => ({
  color: theme.palette.secondary.light,
  fontSize: '1.6rem',
  fontWeight: 400,
  cursor: 'pointer',
  fontFamily: 'open Sans, sans-serif',
  textTransform: 'capitalize',
  transition: 'all opacity color .2s ease',
  position: 'relative',
  display: 'inline-block',
  padding: '3px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 'calc(100% + 5px)',
    width: 0,
    right: 0,
    height: '3px',
    transition: 'width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s',
    background: theme.palette.warning.main,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 'calc(100% + 5px)',
    width: 0,
    right: 0,
    height: '3px',
    transition: 'width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)',
    background: theme.palette.secondary.main,
  },
  '&:hover': {
    '&::after': { width: '100%', left: 0 },
    '&::before': { width: '100%', left: 0 },
  },
  '&.active': {
    color: theme.palette.warning.main,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
