import React, { useState } from 'react';
import {
  Nav,
  StyledContainer,
  Logo,
  NavOptions,
  NavLinks,
  NavItems,
  NavOption,
} from './styles.js';
import { Cart, SearchBar, Search, MobileMenu } from '../../components';
import { navItems } from '../../shared/navItems';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { selectToken } from '../../features/auth/authSlice';

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const authState = false;

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
            <NavLinks to='signin'>Account</NavLinks>
            <Cart />
          </NavOptions>
        </Nav>
      </StyledContainer>
    </>
  );
}
