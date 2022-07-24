import { styled } from '@mui/system';
import { Typography } from '@mui/material';

// export const StyledButton = styled('button')`
// width: 100%;
// height: 6rem;
// background: none;
// border-top: 3px solid #1c1c1c;
// background: ${props => props.$bg || null};
// `;

export const Wrapper = styled('div')`
  width: 100%;
  position: relative;

  overflow: hidden;
  height: 6rem;
`;

export const InnerContainer = styled('div')`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 6rem;
`;

export const StyledContainer = styled('div')`
  position: absolute;
 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  left: ${props => props.left && '-24rem'};
`;

export const Label = styled(Typography)`
  position: relative;
  width: 20rem;
  font-size: 2.2rem;
  font-weight: bold;
`;

export const StyledButton = styled('button', {
  shouldForwardProp: prop => prop !== '$bg',
})(({ $bg }) => ({
  backgroundColor: $bg ? '#d14334' : 'none',
  color: $bg ? '#1c1c1c' : ' #e9e7dc',
  width: '100%',
  height: '6rem',
  borderTop: '1px solid #d14334',
}));
