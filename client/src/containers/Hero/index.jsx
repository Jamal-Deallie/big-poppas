import {
  StyledSection,
  StyledHeading,
  StyledButton,
  Outline,
  Wrap,
  Image,
  GridContainer,
} from './styles';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Typography } from '@mui//material';

export default function HeroContainer() {
  return (
    <StyledSection>
      <Wrap>
        <Grid container spacing={2}>
          <Grid item md={7} sx={{ padding: 'calc(.8rem - 1.5vw' }}>
            <StyledHeading>
              We love the <Outline>dough</Outline> more than you
              <Outline> know</Outline>
            </StyledHeading>
            <Typography variant='body3' sx={{ width: '60ch' }}>
            Fusce ut placerat orci nulla. Vel eros donec ac odio tempor orci dapibus ultrices. Ligula ullamcorper malesuada proin libero nunc consequat. Aliquam faucibus purus in massa tempor nec feugiat nisl. Lorem mollis aliquam ut porttitor leo a diam sollicitudin.
            </Typography>
            <Box>
              <Link to='menu'>
                <StyledButton sx={{ mt: '2.5rem' }}>Order Now</StyledButton>
              </Link>
            </Box>
          </Grid>
          <GridContainer item md={5}>
            <Image
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1650781604/big_poppas/bp-landing_jqwmnr.webp'
              alt='Landing Pizza Image'
            />
          </GridContainer>
        </Grid>
      </Wrap>
    </StyledSection>
  );
}
