import { Grid, Container } from '@mui/material';
import { MapSection, Text, Outline, Heading, Map, MapInner } from './styles';

export default function MapContainer() {
  return (
    <MapSection>
      <MapInner>
        <Heading>
          Come <Outline>Thru</Outline>
        </Heading>
        <Text>
          Big Poppa's Pizza <br />
          26 St James Pl Brooklyn, NY 11205 <br /> (708) 239-4200 <br /> Open
          Daily <br />
          Sunday-Thursday: 11am - 1am <br />
          Friday-Saturday: 11am-3am
        </Text>

        <Map
          src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1658723446/big_poppas/map.webp'
          alt='Big Poppas Location'
        />
      </MapInner>
    </MapSection>
  );
}
