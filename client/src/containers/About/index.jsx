import { Grid } from '@mui/material';
import { AboutSection, Text, Image, Wrap, GridContainer } from './styles';
import { Heading } from '../../components';
export default function AboutContainer() {
  return (
    <AboutSection>
      <Wrap>
        <Heading firstLine={'I Got a Story'} secondLine={'to tell'} />
        <GridContainer container>
          <Grid item md={7}>
            <Image
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1651903985/big_poppas/IMG_2997_l12neo.webp'
              alt='Voletta Wallace'
            />
          </Grid>
          <Grid item md={5}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              elementum dui felis. Nulla facilisi. Nunc tempor interdum elit, a
              euismod orci mollis eget. In non enim at ipsum aliquam ornare.
              Duis nec vulputate est. Nullam sed consequat enim, sed blandit
              enim. Nunc maximus ligula ante, ac rutrum enim vestibulum
              tincidunt. Nullam diam dolor, rhoncus eget justo non, dictum
              dictum magna.
            </Text>
            <Text>
              Duis volutpat arcu augue. Donec ultrices arcu suscipit gravida
              mattis. Vestibulum eu arcu a odio pharetra tempor. Proin lorem
              augue, feugiat et facilisis ac, condimentum non ligula. Vestibulum
              ac finibus erat. Curabitur hendrerit volutpat venenatis. Etiam
              ornare risus vitae dictum vehicula. Nulla eget convallis ligula.
            </Text>
          </Grid>
        </GridContainer>
      </Wrap>
    </AboutSection>
  );
}
