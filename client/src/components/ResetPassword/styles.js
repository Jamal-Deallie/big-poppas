import { styled } from '@mui/material/styles';
import { TextField, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const ResetPasswordSection = styled(Box)(({ theme }) => ({
  background: theme.palette.warning.main,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '10.5rem 0 10.5rem',
  [theme.breakpoints.down('md')]: {
    padding: '6.5rem 0 6.5rem',
  },
}));

export const FormContainer = styled(Container)({
  margin: '0 auto',
  position: 'relative',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '55rem',
});

export const CustomInput = styled(TextField)({
  '& label.Mui-focused': {
    color: ' #e9e7dc',
  },
  '& label': {
    color: ' #1c1c1c',
    fontFamily: 'open-sans, sans-serif',
    fontSize: '1.6rem',
    margin: 'dense',
  },
  '&& .MuiInput-underline:hover:before': {
    borderBottomColor: '#e9e7dc',
  },
  '& .MuiInput-underline': {
    marginTop: 25,
  },
  '& .MuiInput-input': {
    fontSize: 18,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#1c1c1c',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: ' #1c1c1c',
  },
  '& .MuiInput-underline:focused': {
    borderBottomColor: ' #e9e7dc',
  },
});

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontSize: '1.6rem',
  transition: 'color 0.2s ease-in-out',
  fontWeight: 400,
  '&:hover': {
    color: theme.palette.secondary.main,
    fontWeight: 400,
  },
}));

export const LinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '2.5rem',
  textAlign: 'center',
}));

export const FormWrap = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  gap: '5rem',
  maxWidth: '55rem',
  padding: 'calc(.8rem + 1.5vw)',
}));

export const InnerContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  paddingTop: '2.5rem',
}));
