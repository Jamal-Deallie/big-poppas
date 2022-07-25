import { styled } from '@mui/system';
import { Button, Box, TextField, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: `1px solid ${theme.palette.primary.main}`,
      background: 'none',
    },
  },
  '&& .MuiOutlinedInput-root:hover': {
    '& > fieldset': { border: `1px solid ${theme.palette.primary.main}` },
  },
  '& label': {
    color: theme.palette.primary.main,
    fontFamily: 'muli, sans-serif',
    fontSize: '1.6rem',
    margin: 'dense',
  },

  '& .MuiTypography-root': {
    color: theme.palette.primary.main,
  },

  '& .MuiInputBase-root': {
    color: theme.palette.primary.main,
  },

  '& ::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%)',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
}));

export const ContactFormWrap = styled(Grid)(({ theme }) => ({
  background: theme.palette.secondary.light,
  padding: '7.5rem 1rem',
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: '2.5rem',
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'open-sans, sans-serif',
  fontWeight: 300,
  padding: '1rem 4rem',
  boxSizing: 'border-box',
  border: '3px solid',
  padding: '1.2rem 1rem',
  boxShadow:
    '1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,5px 5px 0px 0px',
  boxSizing: 'border-box',
  width: '100%',
  transition: 'all 0.4s ease',
  '&:hover': {
    boxShadow: 'none',
    top: '.5rem',
    left: '.5rem',
  },
}));

export const Form = styled(Box)({
  mt: 3,
  maxWidth: '80rem',
  margin: '0 auto',
  padding: 'calc(.8rem - 1.5vw)',
});

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

