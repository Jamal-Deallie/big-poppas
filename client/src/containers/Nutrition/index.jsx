import {
  NutritionSection,
  Nutrition,
  ContentContainer,
  Pizza,
  PizzaContainer,
  PizzaIcon,
  Container,
} from './styles';
import FadeIn from '../../animations/FadeIn';
import { Box, Typography } from '@mui/material';
import { nutritionItems as items } from '../../shared/nutritionItems';
import { TextDouble } from '../../components';

export default function NutritionContainer() {
  const textData = [
    {
      id: 1,
      text: 'Natural',
      clrSub: 'secondary.main',
      clrTrail: 'primary.light',
    },
    {
      id: 2,
      text: 'Ingredients',
      clrSub: 'primary.main',
      clrTrail: 'primary.light',
    },
  ];

  return (
    <NutritionSection>
      <TextDouble textLines={textData} variant='subheader4' />
      <ContentContainer container>
        <Nutrition item md={3}>
          {items.slice(0, 2).map(item => {
            const { id, desc, src, heading } = item;
            return (
              <FadeIn>
                <Box key={id} sx={{ height: '100%' }}>
                  <Container>
                    <PizzaIcon src={src} alt={desc} />
                  </Container>

                  <Box key={id}>
                    <Typography
                      variant='body2'
                      sx={{ textAlign: 'center', color: 'primary.main' }}>
                      {heading}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{ textAlign: 'center', color: 'primary.main' }}>
                      {desc}
                    </Typography>
                  </Box>
                </Box>
              </FadeIn>
            );
          })}
        </Nutrition>
        <PizzaContainer item md={6}>
          <FadeIn>
            <Pizza
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1658723447/big_poppas/nutrition-pizza.webp'
              alt='pizza slice'
            />
          </FadeIn>
        </PizzaContainer>
        <Nutrition item md={3}>
          {items.slice(2, 4).map(item => {
            const { id, desc, src, heading } = item;
            return (
              <FadeIn>
                <Box key={id} sx={{ height: '100%' }}>
                  <Container>
                    <PizzaIcon src={src} alt={desc} />
                  </Container>

                  <Box key={id}>
                    <Typography
                      variant='body2'
                      sx={{ textAlign: 'center', color: 'primary.main' }}>
                      {heading}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{ textAlign: 'center', color: 'primary.main' }}>
                      {desc}
                    </Typography>
                  </Box>
                </Box>
              </FadeIn>
            );
          })}
        </Nutrition>
      </ContentContainer>
    </NutritionSection>
  );
}
