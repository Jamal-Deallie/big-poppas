import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SearchSection,
  SearchBar,
  StyledInputBase,
  SearchIconWrapper,
  Heading,
  Form,
  FormWrapper,
  CloseSearchBtn,
  SubmitBtn,
  Icon,
  NavOption,
} from './styles';
import { Drawer, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function Search() {
  const [openCart, setOpenCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const cart = useCallback(
    () => setOpenCart(openCart => !openCart),

    [setOpenCart]
  );
  const handleSearch = e => {
    const query = e.target.value.replaceAll(' ', '&');
    setSearchTerm(query);
  };

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search?term=${searchTerm}`);
    setOpenCart(false);
  }
  return (
    <>
      <Box onClick={cart}>
        <NavOption>Search</NavOption>
      </Box>

      <Drawer anchor='top' open={openCart} onClose={cart}>
        <Box>
          <SearchSection>
            <FormWrapper>
              <CloseSearchBtn onClick={cart}>
                <CloseIcon sx={{ color: 'secondary.main', fontSize: 25 }} />
              </CloseSearchBtn>
              <Heading>Who Searched Ya</Heading>
              <Form onSubmit={handleSubmit} type='POST'>
                <SearchBar>
                  <SearchIconWrapper>
                    <SearchIcon
                      color='primary.main'
                      sx={{ fontSize: 25, color: 'secondary.main' }}
                    />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder='Search Our Pizzas'
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleSearch}
                  />
                  <SubmitBtn type='submit'></SubmitBtn>
                </SearchBar>
              </Form>
            </FormWrapper>
          </SearchSection>
        </Box>
      </Drawer>
    </>
  );
}
