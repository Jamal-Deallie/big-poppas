import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button } from '@mui/material';

export const CTASection = styled('div')`
  font-family: Thunder;
  font-size: 8rem;
  width: 100%;
  background: #1c1c1c;
  color: #e9e7dc;
  padding: 10.5rem 0;
`;

export const Heading = styled(Typography)`
  font-family: Thunder;
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: #e9e7dc;
  text-align: center;
`;

export const Outline = styled('span')`
  -webkit-text-stroke: 0.2rem #d14334;
  -webkit-text-fill-color: #1c1c1c;
`;

export const Subheader = styled(Typography)({
  fontFamily: 'open-sans, sans-serif',
  fontSize: '1.8rem',
  maxWidth: '60rem',
  textAlign: 'center',
  margin: '0 auto',
  lineHeight: 1.2,
});

export const ContentContainer = styled(Container)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
});

export const EmailInput = styled(TextField)(({ theme }) => ({
  verticalAlign: 'middle',
  color: ' #e9e7dc',
  '& label.Mui-focused': {
    color: ' #e9e7dc',
  },
  '& label': {
    color: ' #e9e7dc',
    fontFamily: 'open-sans, sans-serif',
    fontSize: 18,
    margin: 'dense',
  },
  '&& .MuiInput-underline:hover:before': {
    borderBottomColor: '#e9e7dc',
  },
  '& .MuiInput-underline': {
    marginTop: 25,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#e9e7dc',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: ' #e9e7dc',
  },
  '& .MuiInput-underline:focused': {
    borderBottomColor: ' #e9e7dc',
  },
  '& .MuiInputBase-root': {
    color: theme.palette.secondary.main,
  },
}));

export const Form = styled('form')({
  margin: 1,
  width: '15ch',
  padding: '0 calc(.8rem + 1.5vw)',
});
