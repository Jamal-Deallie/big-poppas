import { Navbar, Footer } from '../../components';
import { Outlet } from 'react-router-dom';
import {
  StyledLayout,
  ContentContainer,
  NavContainer,
  FooterContainer,
} from './styles';

export default function MainLayout() {
  return (
    <StyledLayout>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </StyledLayout>
  );
}
