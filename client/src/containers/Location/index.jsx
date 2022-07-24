import { Heading } from '../../components';
import { Grid, Container } from '@mui/material';
import {
  LocationSection,
  Text,
  Image,
  ImageWrap,
  GridContainer,
  GridItem,
  Outline,
  Map,
} from './styles';
export default function LocationContainer() {
  return (
    <LocationSection>
      <GridContainer container spacing={1}>
        <GridItem item md={7}>
          <Heading
            firstLine={'Where'}
            secondLine={'Brooklyn At ?'}
            opposite={true}
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque
            arcu, convallis a ornare a, maximus ut nulla. Donec sed malesuada
            ante. Fusce tincidunt justo quis urna dictum, id malesuada arcu
            consectetur. Mauris orci odio, lobortis ac ante ac, commodo tempor
            purus. Etiam varius sollicitudin neque, eget venenatis elit dictum
            at. Integer tincidunt quam id hendrerit consequat. Sed a consectetur
            libero. id.
          </Text>
        </GridItem>
        <GridItem item md={4}>
          <ImageWrap>
            <Image
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1651815824/big_poppas/location.webp'
              alt='Big Poppas Pizzeria'
            />
          </ImageWrap>
        </GridItem>
      </GridContainer>
    </LocationSection>
  );
}
