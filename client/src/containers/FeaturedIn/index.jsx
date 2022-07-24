import { FeaturedSection } from './styles.js';
import { Carousel } from '../../components';
import { featureItems } from '../../shared/featureItems';
import { Heading } from '../../components';
import { Box } from '@mui/material';
export default function FeaturedInContainer() {
  const matrix1 = 'matrix(0.99863, 0.052336, -0.052336, 0.99863, 0, 0)';

  return (
    <FeaturedSection>
      <Heading firstLine={' Featured In'} opposite={true} matrix1={matrix1} />
      <Box sx={{ mt: 7.5 }}>
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
