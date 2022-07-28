import {
  Nav,
  StyledContainer,
  Logo,
  NavOptions,
  NavLinks,
  NavItems,
  UserIcon,
} from './styles.js';
import { Cart, Search, MobileMenu } from '../../components';
import { navItems } from '../../shared/navItems';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { selectToken } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  return (
    <>
      <StyledContainer>
        <MobileMenu />
        <Nav>
          <Link to='/'>
            <Logo
              src='/images/logos/logo-bpp.svg'
              alt='Big Poppa Pizzeria Logo'
            />
          </Link>
          <NavItems>
            {navItems.map(items => {
              return (
                <Box key={items.id}>
                  <NavLinks to={items.link}>{items.label}</NavLinks>
                </Box>
              );
            })}
          </NavItems>
          <NavOptions>
            <Search />
            <Link to={token ? 'account' : 'signin'}>
              <UserIcon
                src='/images/icons/user-1.svg'
                alt='user icon'
                sx={{ mt: 1 }}
              />
            </Link>
            <Cart />
          </NavOptions>
        </Nav>
      </StyledContainer>
    </>
  );
}
