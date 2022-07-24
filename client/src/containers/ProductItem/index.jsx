import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Divider } from '@mui/material';
import {
  useGetProductsByIdQuery,
  selectProductById,
} from '../../features/product/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import { ProductItemSection, GridSection, Text, Heading,IconContainer } from './styles';
import { ATCButton } from '../../components';

export default function ProductItemContainer() {
  const { _id } = useParams();

  const dispatch = useDispatch();

  const { isLoading, isSuccess, isError, error } = useGetProductsByIdQuery(_id);

  const loadedProduct = useSelector(state => selectProductById(state, _id));

  let product;



  if (isLoading) {
    product = <div>...is Loading</div>;
  } else if (isSuccess) {
    const { name, image, price, description } = loadedProduct;
    product = (
      <ProductItemSection>
        <Grid container>
          <Grid item md={6}>
            <img src={image} alt={name} />
          </Grid>
          <Grid item md={6}>
            <Heading>{name}</Heading>
            <Text $fontSz={'2.4rem'}>${price}</Text>

            <Divider />
            <IconContainer>
            <img src="/images/star.svg" alt="Health Facts"/>



            </IconContainer>
   
            <Text>{description}</Text>
            <ATCButton items={loadedProduct} />
          </Grid>
        </Grid>
      </ProductItemSection>
    );
  } else if (isError) {
    product = <div>{error}</div>;
  }

  return <div>{product}</div>;
}
