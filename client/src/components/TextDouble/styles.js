import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const TrailContainer = styled(Box)(({ theme }) => {});

export const SubContainer = styled(Box, {
  shouldForwardProp: prop => prop !== '$fz',
})(({ theme, $fz, $pos, $txtStroke, $clr }) => ({
  lineHeight: 1,
  textAlign: 'center',
  width: '100%',
}));
