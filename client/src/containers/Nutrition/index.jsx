import { useEffect, useRef } from 'react';
import {
  NutritionSection,
  Nutrition,
  ContentContainer,
  Pizza,
  PizzaContainer,
  PizzaIcon,
  Container,
  HeadingContainer,
  HeadingWrap,
  Heading,
  HeadingSection,
} from './styles';
import { yoyoAnimation } from '../../animations/yoyo';
import { rotationAnimation } from '../../animations/rotate';
import { Box, Typography } from '@mui/material';
import { nutritionItems as items } from '../../shared/nutritionItems';
import useArrayRef from '../../hooks/useArrayRef';

export default function NutritionContainer() {
  const imageRef = useRef(null);
  const [validation, setValidation] = useArrayRef();

  useEffect(() => {
    yoyoAnimation(imageRef.current);
  }, []);

  useEffect(() => {
    rotationAnimation(validation.current);
  }, [validation]);

  return (
    <NutritionSection>
      <HeadingSection>
        <HeadingContainer>
          <HeadingWrap>
            <Heading>Made with</Heading>
          </HeadingWrap>

          <HeadingWrap>
            <Heading>real ingredients</Heading>
          </HeadingWrap>
        </HeadingContainer>
      </HeadingSection>

      <ContentContainer container>
        <Nutrition item md={3}>
          {items.slice(0, 2).map(item => {
            const { id, desc } = item;
            return (
              <Box key={id}>
                <Container>
                  <PizzaIcon
                    src='images/icons/pizza-pie.svg'
                    alt='validation'
                    ref={setValidation}
                  />
                </Container>

                <Box>
                  <Typography variant='body1' sx={{ textAlign: 'center' }}>
                    {desc}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Nutrition>
        <PizzaContainer item md={6}>
          <Pizza
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1658723447/big_poppas/nutrition-pizza.webp'
            alt='pizza slice'
            ref={imageRef}
          />
        </PizzaContainer>
        <Nutrition item md={3}>
          {items.slice(2, 4).map(item => {
            const { id, desc } = item;
            return (
              <Box key={id} sx={{ height: '100%' }}>
                <Container>
                  <PizzaIcon
                    src='images/icons/pizza-pie.svg'
                    alt='validation'
                    ref={setValidation}
                  />
                </Container>

                <Box key={id}>
                  <Typography variant='body1' sx={{ textAlign: 'center' }}>
                    {desc}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Nutrition>
      </ContentContainer>
    </NutritionSection>
  );
}
