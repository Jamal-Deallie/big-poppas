import { styled } from '@mui/system';

export const StyledLayout = styled('div')`
  display: flex;
  flex-direction: column;

  justify-content: space-around;

  align-items: stretch;
`;

export const ContentContainer = styled('div')`
  flex-grow: 2;

`;

export const NavContainer = styled('div')`
  flex-grow: 1;
`;
export const FooterContainer = styled('div')`
  flex-grow: 1;
`;
