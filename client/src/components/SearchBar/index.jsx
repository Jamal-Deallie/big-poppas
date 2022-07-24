import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import useDebounce from '../../hooks/useDebounce';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import {
  SearchBarSection,
  Search,
  StyledInputBase,
  SearchIconWrapper,
  Heading,
  Form,
  FormWrapper,
  CloseSearchBtn,
  SubmitBtn,
} from './styles';
import { useDispatch } from 'react-redux';
import { getQuery } from '../../features/query/querySlice';

export default function SearchBar({
  handleSearchBar,
  toggleSearch,
  setToggleSearch,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  console.log({ search: toggleSearch });
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = location;


  const handleSearch = e => {
    e.preventDefault();
    setSearchParams(e.target.value);
    setSearchTerm(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('searchQuery', JSON.stringify({ term: searchTerm }));
    handleSearchBar();
    navigate(`/menu/search?term=${searchTerm}`);
  }

  return (
    <SearchBarSection $open={toggleSearch}>
      <FormWrapper>
        <Heading>Who Searched Ya</Heading>
        <Form onSubmit={handleSubmit} type='POST'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color='primary.main' sx={{ fontSize: 25 }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search Our Pizzas'
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
            <SubmitBtn type='submit'></SubmitBtn>
          </Search>
          <CloseSearchBtn>
            <CloseIcon color='primary.main' />
          </CloseSearchBtn>
        </Form>
      </FormWrapper>
    </SearchBarSection>
  );
}
