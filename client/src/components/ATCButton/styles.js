import { styled } from '@mui/system';
import { Button, Box, Typography } from '@mui/material';

export const CardButton = styled('button')(({ theme }) => ({
  color: theme.palette.secondary.main,
  height: '6rem',
  background: 'none',
  width: '100%',
  borderTop: `1px solid ${theme.palette.warning.main}`,
  transition: 'transform 250ms',
  fontSize: '2.4rem',
  fontFamily: 'Thunder, sans-serif',
  textTransform: 'uppercase',
  textAlign: 'center',
  color: theme.palette.secondary.main,
  letterSpacing: '0.2rem',
  borderRadius: 0,
  marginBottom: 0,
  '&:hover': {
    backgroundColor: theme.palette.warning.main,
  },
}));
