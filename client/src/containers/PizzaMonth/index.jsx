import { Grid } from '@mui/material';
import {
  Pizza,
  PizzaOfTheMonthSection,
  Subheader,
  Text,
  Outline,
  StyledButton,
  Wrapper,
  GridSection,
} from './styles';
import { Link } from 'react-router-dom';
import { Heading } from '../../components';

export default function PizzaOfMonthContainer() {
  return (
    <PizzaOfTheMonthSection>
      <Wrapper>
        <Heading
          firstLine={'Pizza of'}
          secondLine={'the month'}
          opposite={true}
        />
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Subheader>
              Notorious <Outline>P.I.E</Outline>
            </Subheader>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
            <Link to='/menu/626d90f6b78a55e39a90bf32'>
              <StyledButton>Shop Now</StyledButton>
            </Link>
          </Grid>
          <GridSection item md={6}>
            <Pizza src='/images/bp-img-3.png' alt='Pizza of the month' />
          </GridSection>
        </Grid>
      </Wrapper>
    </PizzaOfTheMonthSection>
  );
}
