import { Container, Grid, Typography } from '@mui/material';
import {
  Section,
  Text,
  Image,
  Wrap,
  GridContainer,
  GridItem,
  Heading,
  Outline,
} from './styles';

export default function InMemoriamContainer() {
  return (
    <Section>
      <Wrap>
        <Heading>
          It was all a <Outline>Dream</Outline>
        </Heading>
        <GridContainer container spacing={1}>
          <GridItem item md={6}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              elementum dui felis. Nulla facilisi. Nunc tempor interdum elit, a
              euismod orci mollis eget. In non enim at ipsum aliquam ornare.
              Duis nec vulputate est. Nullam sed consequat enim, sed blandit
              enim. Nunc maximus ligula ante, ac rutrum enim vestibulum
              tincidunt. Nullam diam dolor, rhoncus eget justo non, dictum
              dictum magna.
            </Text>
          </GridItem>
          <GridItem item md={6}>
            <Image
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1651906805/big_poppas/memoriam.webp'
              alt='Christoper Wallace'
            />
          </GridItem>
        </GridContainer>
      </Wrap>
    </Section>
  );
}
