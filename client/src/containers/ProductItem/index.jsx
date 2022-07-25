import { useParams } from 'react-router-dom';
import { Container, Grid, Divider, CircularProgress, Box } from '@mui/material';
import {
  useGetProductsByIdQuery,
  selectProductById,
} from '../../features/product/productSlice';
import { useSelector } from 'react-redux';
import { ProductItemSection, Text, Heading, CustomDivider } from './styles';
import { ATCButton } from '../../components';

export default function ProductItemContainer() {
  const { _id } = useParams();
  const { isLoading, isSuccess, isError, error } = useGetProductsByIdQuery(_id);
  const loadedProduct = useSelector(state => selectProductById(state, _id));

  let product;

  if (isLoading) {
    product = (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
          background: 'primary.main',
        }}>
        <CircularProgress color='secondary' />
      </Box>
    );
  } else if (isSuccess) {
    const { name, image, price, description } = loadedProduct;
    product = (
      <ProductItemSection>
        <Container>
          <Grid container>
            <Grid item md={6}>
              <img src={image} alt={name} />
            </Grid>
            <Grid item md={6}>
              <Box sx={{ pt: 2.5 }}>
                <Heading>{name}</Heading>
                <Text $fontSz={'2.4rem'}>${price}</Text>

                <CustomDivider />

                <Text>Made With:</Text>
                <Text>{description}</Text>
                <ATCButton items={loadedProduct} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ProductItemSection>
    );
  } else if (isError) {
    product = <div>{error}</div>;
  }

  return <div>{product}</div>;
}
