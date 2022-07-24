import React, { useEffect } from 'react';
import { useGetProductsBySearchQuery } from '../../features/product/productSlice';
import { selectQuery } from '../../features/query/querySlice';
import { useSelector } from 'react-redux';
import {
  Heading,
  ContentContainer,
  HeadingContainer,
  ProductSection,
  ProductWrapper,
  Outline,
} from './styles';
import { ProductList } from '../../components';
import { Typography } from '@mui/material';


export default function SearchResultsContainer() {
  return (
    <ProductSection>
      <ContentContainer>
        <HeadingContainer>
          <Heading>
            <Outline> Search</Outline> Results
          </Heading>
        </HeadingContainer>
        {/* {currentData ? (
          products
        ) : (
          <div>
            <Typography> No Pizzas are available</Typography>
          </div>
        )} */}
        <div>
          <Typography> No Pizzas are available</Typography>
        </div>
      </ContentContainer>
    </ProductSection>
  );
}
