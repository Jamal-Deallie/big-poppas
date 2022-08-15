import { styled } from '@mui/system';
import { Container, Grid } from '@mui/material';

export const MemoriamSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  width: '100%',
  padding: '10rem 0',
}));

export const InnerContainer = styled(Container)({ margin: '0 auto' });

export const Image = styled('img')(({ theme }) => ({
  width: '100%',
  maskImage: 'linear-gradient(to right, transparent 3%, black 100%)',
  [theme.breakpoints.down('md')]: {
    WebkitMaskImage: 'linear-gradient(to bottom, transparent 1%, black 22%)',
    maskImage: 'linear-gradient(to bottom, transparent -10%, black 100%)',
    marginTop: '2.5rem',
  },
}));

export const GridContainer = styled(Grid)({
  padding: 'calc(.8rem + 1.5vw)',
});

export const GridItem = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});
