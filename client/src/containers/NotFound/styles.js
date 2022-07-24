import { styled } from '@mui/system';
import { Container } from '@mui/material';

export const NotFoundSection = styled('section')(({ theme }) => ({
  height: '100vh',
  background: theme.palette.secondary.main,
  padding: 'calc(.8rem - 1.5vw)',
}));

export const InnerContainer = styled(Container)({
  margin: '0 auto',
  padding: 'calc(.8rem - 1.5vw)',
});

export const Text = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'Thunder, sans-serif',
  fontSize: '80rem',
}));
