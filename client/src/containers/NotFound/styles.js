import { styled } from '@mui/system';
import { Container } from '@mui/material';

export const NotFoundSection = styled('section')(({ theme }) => ({
  background: theme.palette.warning.main,
  width: '100%',
  minHeight: '70rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    minHeight: '50rem',
  },
}));

export const InnerContainer = styled(Container)({
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: 'calc(.8rem - 1.5vw)',
});

export const Text = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'Thunder, sans-serif',
  fontSize: 'clamp(11.88rem, calc(9.37rem + 12.55vw), 18.31rem)',
}));
