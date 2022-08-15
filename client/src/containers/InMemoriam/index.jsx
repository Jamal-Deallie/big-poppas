import { Typography, Box } from '@mui/material';
import {
  Image,
  InnerContainer,
  GridContainer,
  GridItem,
  MemoriamSection,
} from './styles';
import MaskOut from '../../animations/MaskOut';
import FadeUp from '../../animations/FadeUp';
import FadeIn from '../../animations/FadeIn';

export default function InMemoriamContainer() {
  return (
    <MemoriamSection>
      <InnerContainer>
        <FadeUp ease='circ.out'>
          <Typography variant='header4' sx={{ textAlign: 'center' }}>
            It was all a <span>Dream</span>
          </Typography>
        </FadeUp>
        <GridContainer container spacing={1}>
          <GridItem item md={6}>
            <Box>
              <FadeUp ease='circ.out'>
                <Typography variant='subheader3' sx={{ textAlign: 'center' }}>
                  5/21/1972 – <span>3/9/1997</span>
                </Typography>
              </FadeUp>
              <FadeIn>
                <Typography variant='body3' color='secondary'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas elementum dui felis. Nulla facilisi. Nunc tempor
                  interdum elit, a euismod orci mollis eget. In non enim at
                  ipsum aliquam ornare. Duis nec vulputate est. Nullam sed
                  consequat enim, sed blandit enim. Nunc maximus ligula ante, ac
                  rutrum enim vestibulum tincidunt. Nullam diam dolor, rhoncus
                  eget justo non, dictum dictum magna.
                </Typography>
              </FadeIn>
            </Box>
          </GridItem>
          <GridItem item md={6}>
            <MaskOut>
              <Image
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1651906805/big_poppas/memoriam.webp'
                alt='Christoper Wallace'
              />
            </MaskOut>
          </GridItem>
        </GridContainer>
      </InnerContainer>
    </MemoriamSection>
  );
}
