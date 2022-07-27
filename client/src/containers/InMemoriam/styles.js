import { styled } from '@mui/system';
import { Typography, Container, Grid, Box } from '@mui/material';

export const MemoriamSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  width: '100%',
  padding: '10rem 0',
}));

export const InnerContainer = styled(Container)({ margin: '0 auto' });

export const Heading = styled(Typography)`
  font-family: Thunder;
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  color: #e9e7dc;
  text-align: center;
`;


export const Outline = styled('span')(({ theme }) => ({
  WebkitTextStroke: `.15rem ${theme.palette.warning.main}`,
  WebkitTextFillColor: theme.palette.primary.main,
}));

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
