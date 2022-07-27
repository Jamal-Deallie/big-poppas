import { Grid, Typography } from '@mui/material';
import {
  AboutSection,
  Image,
  InnerContainer,
  GridContainer,
  HeadingContainer,
  HeadingWrap,
  Heading,
  HeadingSection,
  GridText,
} from './styles';
import AboutAnimation from '../../animations/about';
import HeadingAnimation from '../../animations/heading';

export default function AboutContainer() {
  return (
    <AboutSection>
      <InnerContainer>
        <HeadingAnimation id='about'>
          <HeadingSection>
            <HeadingContainer>
              <HeadingWrap>
                <Heading id='about-heading'>I GOT A</Heading>
              </HeadingWrap>

              <HeadingWrap>
                <Heading id='about-heading'>Story To Tell</Heading>
              </HeadingWrap>
            </HeadingContainer>
          </HeadingSection>
        </HeadingAnimation>

        <GridContainer container columnSpacing={4}>
          <Grid item md={7}>
            <Image
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1651903985/big_poppas/IMG_2997_l12neo.webp'
              alt='Voletta Wallace'
              id='about-image'
            />
          </Grid>
          <GridText item md={5}>
            <Typography variant='body3' color='primary' id='about-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              elementum dui felis. Nulla facilisi. Nunc tempor interdum elit, a
              euismod orci mollis eget. In non enim at ipsum aliquam ornare.
              Duis nec vulputate est. Nullam sed consequat enim, sed blandit
              enim. Nunc maximus ligula ante, ac rutrum enim vestibulum
              tincidunt. Nullam diam dolor, rhoncus eget justo non, dictum
              dictum magna.
            </Typography>
            <Typography
              variant='body3'
              color='primary'
              sx={{ mt: 2.5 }}
              id='about-text'>
              Duis volutpat arcu augue. Donec ultrices arcu suscipit gravida
              mattis. Vestibulum eu arcu a odio pharetra tempor. Proin lorem
              augue, feugiat et facilisis ac, condimentum non ligula. Vestibulum
              ac finibus erat. Curabitur hendrerit volutpat venenatis. Etiam
              ornare risus vitae dictum vehicula. Nulla eget convallis ligula.
            </Typography>
          </GridText>
        </GridContainer>
      </InnerContainer>
    </AboutSection>
  );
}
