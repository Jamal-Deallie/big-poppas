import { Grid, Typography } from '@mui/material';
import {
  AboutSection,
  Image,
  InnerContainer,
  GridContainer,
  GridText,
} from './styles';
import { TextDouble } from '../../components';
import FadeIn from '../../animations/FadeIn';



export default function AboutContainer() {
  const textData = [
    {
      id: 1,
      text: "I'm not only the client",
      clrSub: 'secondary.main',
      clrTrail: 'primary.light',
    },
    {
      id: 2,
      text: "I'm the player president",
      clrSub: 'primary.main',
      clrTrail: 'primary.light',
    },
  ];

  return (
    <AboutSection>
      <InnerContainer>
        <TextDouble textLines={textData} variant='subheader5' />

        <GridContainer container columnSpacing={4}>
          <Grid item md={7}>
            <FadeIn>
              <Image
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1651903985/big_poppas/IMG_2997_l12neo.webp'
                alt='Voletta Wallace'
                id='about-image'
              />
            </FadeIn>
          </Grid>
          <GridText item md={5}>
            <FadeIn>
              <Typography variant='body3' color='primary' id='about-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas elementum dui felis. Nulla facilisi. Nunc tempor
                interdum elit, a euismod orci mollis eget. In non enim at ipsum
                aliquam ornare. Duis nec vulputate est. Nullam sed consequat
                enim, sed blandit enim. Nunc maximus ligula ante, ac rutrum enim
                vestibulum tincidunt. Nullam diam dolor, rhoncus eget justo non,
                dictum dictum magna.
              </Typography>

              <Typography
                variant='body3'
                color='primary'
                sx={{ mt: 2.5 }}
                id='about-text'>
                Duis volutpat arcu augue. Donec ultrices arcu suscipit gravida
                mattis. Vestibulum eu arcu a odio pharetra tempor. Proin lorem
                augue, feugiat et facilisis ac, condimentum non ligula.
                Vestibulum ac finibus erat. Curabitur hendrerit volutpat
                venenatis. Etiam ornare risus vitae dictum vehicula. Nulla eget
                convallis ligula.
              </Typography>
            </FadeIn>
          </GridText>
        </GridContainer>
      </InnerContainer>
    </AboutSection>
  );
}
