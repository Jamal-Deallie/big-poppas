import { StorySection, StoryInner, CustomLink } from './styles';
import { Box } from '@mui/material';
import { TextScroll, TextDouble } from '../../components';

export default function StoryContainer() {
  const textData = [
    {
      id: 1,
      text: 'Sed porttitor lectus',
      clrSub: 'secondary.main',
      clrTrail: 'warning.main',
    },
    {
      id: 2,
      text: 'Cras ultricies ligula sed',
      clrSub: 'warning.main',
      clrTrail: 'primary.light',
    },
    {
      id: 3,
      text: ' magna dictum porta',
      clrSub: 'secondary.main',
      clrTrail: 'warning.light',
    },
    {
      id: 4,
      text: 'Proin eget tortor risus.',
      clrSub: 'warning.main',
      clrTrail: 'primary.light',
    },
  ];

  return (
    <TextScroll>
      <StorySection>
        <StoryInner>
          <TextDouble textLines={textData} variant='subheader5' $fz='true' />
        </StoryInner>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomLink to='about'>Learn More</CustomLink>
        </Box>
      </StorySection>
    </TextScroll>
  );
}
