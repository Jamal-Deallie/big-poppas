import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

export const RegisterSection = styled('div')(({ theme }) => ({
  background: theme.palette.warning.main,
  padding: '12.5rem 0',
}));

export const RegisterWrap = styled('form')({
  width: '45rem',
  margin: '0 auto',
});
export const CustomButton = styled(Button)`
  font-family: 'open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #1c1c1c;
  cursor: pointer;
  border: 3px solid;
  padding: 1.2rem 1rem;
  background: #e9e7dc;
  min-width: 100%;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

export const FormWrap = styled(Container)`
  padding-top: 7.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
`;

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

export const Link = styled('p')`
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: #e;
  }
`;

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontSize: '1.6rem',
  transition: 'color 0.5s ease-in-out',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

export const FormContainer = styled(Box)({
  margin: '0 auto',
  padding: 'calc(.8rem - 1.5vw)',
  maxWidth: '50rem',
});
