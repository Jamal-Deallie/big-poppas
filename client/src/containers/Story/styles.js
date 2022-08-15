import { styled } from '@mui/system';
import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const StorySection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: '2.5% 0 5%',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '15% 0 ',
  },
}));

export const StoryInner = styled(Container)(({ theme }) => ({
  padding: '5% 0',
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  fontSize: '1.6rem',
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  lineHeight: 1.2,
  transition: 'color borderBottom 0.3s ease',
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
  cursor: 'pointer',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '1.2px',
    left: 0,
    bottom: '-5px',
    background: theme.palette.secondary.main,
    transform: 'scale(1)',
    transformOrigin: 'left center',
    transition: 'transform .2s ease-in-out',
  },
  '&:hover': {
    color: theme.palette.warning.main,
    '&::before': {
      background: theme.palette.warning.main,
    },
  },
  [theme.breakpoints.down('md')]: {
    marginTop: 0,
  },
}));
