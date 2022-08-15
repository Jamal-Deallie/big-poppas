import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const TextWrapper = styled(Box)(({ theme }) => ({
  width: '150%',
  position: 'relative',
  gap: '2rem',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  fontSize: 'clamp(96px, 16vh, 260px)',
  color: theme.palette.secondary.main,
  fontFamily: 'Thunder, sans-serif',
  textTransform: 'uppercase',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(96px, 16vh, 260px)',
  color: theme.palette.secondary.main,
  fontFamily: 'Thunder, sans-serif',
  textTransform: 'uppercase',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const ContentContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ScrollWrapper = styled(Box)({});

export const Outline = styled('span')`
  -webkit-text-stroke: 0.15rem #d14334;
  -webkit-text-fill-color: #1c1c1c;
  text-transform: uppercase;
`;

export const ScrollContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  overflow: 'hidden',
}));

export const SmileyFace = styled('img')({
  height: '9rem',
  marginBottom: '2rem',
  marginRight: '2.5rem',
});

export const SmileyContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
