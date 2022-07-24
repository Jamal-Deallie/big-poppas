import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)`
  font-family: 'open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #1c1c1c;
  cursor: pointer;
  border: 3px solid;
  padding: 1.2rem 1rem;
  /* background: ${props => (props.color ? props.color : '#E9E7DC')} */
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
