import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Wrapper = styled(Box)({
  width: '150%',
  position: 'relative',
  overflow: 'hidden',
  maskImage: 'linear-gradient(to right, transparent 10%, black 45%)',
  height: '12rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const InnerContainer = styled(Box)({
  width: '100%',
  position: 'absolute',
  overflow: 'hidden',
  padding: '1rem',
  height: '12rem',
});

export const Container = styled(Box)({
  width: '100%',
  position: 'absolute',
  marginLeft: '-35rem',
});

export const Icon = styled('img')({
  width: '13.5rem',
});

export const IconWrap = styled(Box)({
  padding: '1rem',
  height: '10rem',
  width: '35rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CarouselContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
});
