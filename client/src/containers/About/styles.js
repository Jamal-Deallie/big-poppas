import { styled } from '@mui/system';
import { Typography, Container, Grid, Box } from '@mui/material';

export const AboutSection = styled('section')(({ theme }) => ({
  background: theme.palette.warning.main,
  width: '100%',
  padding: '10.5rem 0',
}));

export const Image = styled('img')(({ theme }) => ({
  maxHeight: '55rem',
  objectFit: 'cover',
  filter: 'grayscale(100%)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const InnerContainer = styled(Container)({
  margin: '0 auto',
});
export const GridContainer = styled(Grid)({
  padding: 'calc(.8rem + 1.5vw)',
});

export const HeadingWrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  maxWidth: '65rem',
  padding: '0 1rem',
  overflow: 'hidden',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'Thunder',
  fontSize: '9.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  [theme.breakpoints.down('md')]: {
    fontSize: '7.4rem',
  },
}));

export const HeadingContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '& > :nth-of-type(1)': {
    transform:
      'matrix(0.996195,0.0871557,-0.0871557,0.996195,-42.8364,-10.7477)',
  },
  '& > :nth-of-type(2)': {
    transform: 'matrix(0.99863, 0.052336, -0.052336, 0.99863, 9.9315, 2.6168)',
  },
});

export const HeadingSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'calc(.8rem + 1.5vw)',
  overflow: 'hidden',
});

export const GridText = styled(Grid)(({ theme }) => ({
  marginTop: '8rem',
  [theme.breakpoints.down('md')]: {
    marginTop: '5rem',
  },
}));
