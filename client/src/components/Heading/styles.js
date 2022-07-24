import { styled } from '@mui/system';
import { Container, Typography, Grid, Button } from '@mui/material';

export const Text = styled(Typography)`
  font-family: Thunder;
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  font-weight: bold;
  text-align: center;
  color: #e9e7dc;
  text-transform: uppercase;
`;

export const BottomSpot = styled('img')`
  height: 6rem;
  position: absolute;
  right: 45%;
  bottom: 20%;
  transform: rotate(45deg);
`;

export const Spot = styled('img')`
  &:nth-of-type(1) {
    margin: 0;
    height: 3rem;
    position: absolute;
    top: -20%;
    left: -7%;
    margin-right: -7%;
    transform: translate(-7%, 0%);
  }
  &:nth-of-type(2) {
    margin: 0;
    width: 2.5rem;
    position: absolute;
    bottom: -4.5%;
    right: 40%;
    margin-left: -40%;
    transform: translate(-40%, 100%) matrix(0, 1, -1, 0, 0, 0);
  }
`;

// export const HeadingWrap = styled('div')`
//   background: ${props => props.$color || '#1c1c1c'};
//   max-width: 65rem;
//   padding: 0 1rem;
//   font-family: Thunder;

//   &:nth-of-type(1) {
//     transform:
//       ${props =>
//         props.alternative
//           ? 'matrix(0.996195,0.0871557,-0.0871557,0.996195,-42.8364,-10.7477)'
//           : 'matrix(0.99863, 0.052336, -0.052336, 0.99863, 0, 0)'};
//     color: #e9e7dc;
//     text-transform: uppercase;
//   }
//   &:nth-of-type(2) {
//     transform:
//       ${props =>
//         props.alternative
//           ? 'matrix(0.99863, 0.052336, -0.052336, 0.99863, 89.9315, 2.6168)'
//           : 'matrix(0.99863, 0.052336, -0.052336, 0.99863, 129, 0)'};
//   }
// `;

// export const HeadingSection = styled(Container)`
//   position: relative;
//   width: auto;
// `;

export const HeadingWrap = styled('div', {
  shouldForwardProp: prop => prop !== '$matrix',
})(({ theme, $matrix }) => ({
  backgroundColor: '#1c1c1c',
  maxWidth: '65rem',
  padding: '0 1rem',
  fontFamily: 'Thunder',
}));

export const HeadingSection = styled(Container)({
  position: 'relative',
  width: 'auto',
});

export const HeadingContainer = styled('div', {
  shouldForwardProp: prop => prop !== '$matrix1' && prop !== 'matrix2',
})(({ $matrix1, $matrix2 }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '& > :nth-of-type(1)': {
    transform: $matrix1
      ? $matrix1
      : 'matrix(0.996195,0.0871557,-0.0871557,0.996195,-42.8364,-10.7477)',
  },
  '& > :nth-of-type(2)': {
    transform: $matrix2
      ? $matrix2
      : 'matrix(0.99863, 0.052336, -0.052336, 0.99863, 89.9315, 2.6168)',
  },
}));

// export const HeadingContainer = styled('div')`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;
