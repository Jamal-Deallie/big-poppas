import { styled } from '@mui/system';
import { Container, Typography, Grid, Button } from '@mui/material';

export const StorySection = styled('div')`
  width: 100%;
  background: #1c1c1c;
`;

export const Text = styled(Typography)`
  fontFamily: 'open Sans', sans-serif;
  fontSize: '1.8rem',
  color: #e9e7dc;
`;

// export const HeadingContainer = styled(Container)`
/* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
// `;

export const HeadingContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const Crown = styled('img')`
  height: 4rem;
  position: absolute;
  right: 0%;
  top: 0%;
`;

export const Image = styled('img')({
  maxHeight: '45rem',
  padding: 'calc(.8rem - 1.5vw)',
  maskImage: 'linear-gradient(to top, transparent 1%, black 45%)',
});

export const ImageWrapper = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const GridContainer = styled(Grid)({
  margin: '0 auto',
  padding: '1rem',
  maxWidth: '120rem',
  alignItems: 'center',
});

export const Circle = styled('span')``;
// #e9e7dc;
export const StyledButton = styled(Button)`
  font-family: 'open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #e9e7dc;
  cursor: pointer;
  border: 3px solid;
  padding: 1.2rem 1rem;
  background: #1c1c1c;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

export const Heading = styled(Typography)`
  font-family: Thunder;
  font-size: clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem);
  font-weight: bold;
  line-height: 10rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  color: #e9e7dc;
  text-align: center;
  margin-bottom: 7.5rem;
  max-width: 60rem;
`;

export const Outline = styled('span')`
  -webkit-text-stroke: 0.15rem #d14334;
  -webkit-text-fill-color: #1c1c1c;
`;
