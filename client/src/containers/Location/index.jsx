import {
  LocationSection,
  Text,
  Image,
  ImageWrap,
  GridContainer,
  GridItem,
  ContentContainer,
} from './styles';
import { TextDouble } from '../../components';
import FadeIn from '../../animations/FadeIn';

export default function LocationContainer() {
  const textData = [
    {
      id: 1,
      text: 'Where',
      clrSub: 'secondary.main',
      clrTrail: 'primary.light',
    },
    {
      id: 2,
      text: 'Brooklyn At?',
      clrSub: 'primary.main',
      clrTrail: 'primary.light',
    },
  ];

  return (
    <LocationSection>
      <GridContainer container spacing={3}>
        <GridItem item md={5}>
          <ContentContainer>
            <TextDouble textLines={textData} variant='subheader5' />
            <FadeIn>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                neque arcu, convallis a ornare a, maximus ut nulla. Donec sed
                malesuada ante. Fusce tincidunt justo quis urna dictum, id
                malesuada arcu consectetur. Mauris orci odio, lobortis ac ante
                ac, commodo tempor purus. Etiam varius sollicitudin neque, eget
                venenatis elit dictum at. Integer tincidunt quam id hendrerit
                consequat. Sed a consectetur libero. id.
              </Text>
            </FadeIn>
          </ContentContainer>
        </GridItem>
        <GridItem item md={7}>
          <FadeIn>
            <ImageWrap>
              <Image
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1651815824/big_poppas/location.webp'
                alt='Big Poppas Pizzeria'
              />
            </ImageWrap>
          </FadeIn>
        </GridItem>
      </GridContainer>
    </LocationSection>
  );
}
