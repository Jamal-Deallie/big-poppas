import { useMemo } from 'react';
import {
  Heading,
  HeadingContainer,
  ProductSection,
  Outline,
  ItemContainer,
} from './styles';
import { useLocation } from 'react-router-dom';
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
      <ItemContainer>{Products()}</ItemContainer>
    </ProductSection>
  );
}
