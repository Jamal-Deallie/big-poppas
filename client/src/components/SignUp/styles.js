import { styled } from '@mui/material/styles';
import { Container, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const RegisterSection = styled(Box)(({ theme }) => ({
  background: theme.palette.warning.main,
  padding: '10.5rem 0',
}));

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

export const FormWrap = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '55rem',
  padding: 'calc(.8rem + 1.5vw)',
  height: '100%',
}));

export const FormContainer = styled(Container)({
  margin: '0 auto',
  position: 'relative',
  height: '80rem',
});
