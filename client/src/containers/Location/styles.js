import { styled } from '@mui/system';
import { Typography, Container, Grid } from '@mui/material';

export const Image = styled('img')`
  width: 100%;
`;

export const ImageWrap = styled('div')`
  display: flex;
  align-items: stretch;
  justify-content: center;



`;

export const GridContainer = styled(Grid)`
  margin: 0 auto;
`;

export const GridItem = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  flex-direction: column;
`;

export const Text = styled(Typography)`
  margin-top: 7.5rem;
  font-size: 1.8rem;
  color: #e9e7dc;
  max-width: 65rem;
`;

export const LocationSection = styled('section')`
  background: #d14334;
  width: 100%;
  padding: 12.5rem 0;
`;
