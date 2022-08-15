import { styled } from '@mui/system';
import { Typography, Box, Grid } from '@mui/material';

export const Image = styled('img')({
  width: '100%',
  padding: 'calc(.8rem + 1.5vw)',
});

export const ImageWrap = styled('div')`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const GridContainer = styled(Grid)`
  margin: 0 auto;
  max-width: 135rem;
`;

export const GridItem = styled(Grid)({});

export const Text = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
}));

export const LocationSection = styled('section')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.warning.main,
  padding: '4% 0 5%',
  [theme.breakpoints.down('md')]: {
    padding: '15% 0',
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: 'calc(.8rem + 1.5vw)',
  marginTop: '5% ',
  [theme.breakpoints.down('md')]: {
    marginTop: 0,
  },
}));
