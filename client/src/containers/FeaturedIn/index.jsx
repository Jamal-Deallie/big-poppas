import { FeaturedSection } from './styles.js';
import { Carousel } from '../../components';
import { featureItems } from '../../shared/featureItems';
import { TextDouble } from '../../components';
import { Box } from '@mui/material';

export default function FeaturedInContainer() {
  const textData = [
    {
      id: 1,
      text: 'Featured In',
      clrSub: 'primary.main',
      clrTrail: 'warning.main',
    },
  ];
  return (
    <FeaturedSection>
      <TextDouble textLines={textData} variant='subheader4' />
      <Box sx={{ mt: '2.5%' }}>
        <Carousel items={featureItems.slice(0, 10)} reverse={false} />
      </Box>
      <Box>
        <Carousel items={featureItems.slice(10, 19)} reverse={true} />
      </Box>
      <Box>
        <Carousel items={featureItems.slice(20, 29)} reverse={false} />
      </Box>
    </FeaturedSection>
  );
}
