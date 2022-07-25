import { useMemo } from 'react';
import {
  Heading,
  ContentContainer,
  HeadingContainer,
  ProductSection,
  Outline,
} from './styles';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import {
  ProductListContainer,
  SearchListContainer,
  NotFoundContainer,
} from '../../containers';

export default function ProductContainer() {
  const location = useLocation();

  const subheader = useMemo(
    () => location.pathname.split('/').at(-1).replace('-', ' '),
    [location]
  );

  console.log(subheader);

  const Products = () => {
    switch (subheader) {
      case 'search':
        return <SearchListContainer />;

      case 'menu':
        return <ProductListContainer />;

      default:
        <NotFoundContainer />;
    }
  };

  return (
    <ProductSection>
      <ContentContainer>
        <HeadingContainer>
          {subheader === 'search' ? (
            <Heading>
              <Outline>Search</Outline> Results
            </Heading>
          ) : (
            <Heading>
              <Outline> Ready</Outline> to Pie ?
            </Heading>
          )}
        </HeadingContainer>
        <Container>{Products()}</Container>
      </ContentContainer>
    </ProductSection>
  );
}
