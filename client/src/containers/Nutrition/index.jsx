import { useEffect, useRef } from 'react';
import {
  NutritionSection,
  Subheader,
  Nutrition,
  ContentContainer,
  Pizza,
  PizzaContainer,
  BangImg,
  Container,
} from './styles';
import { Heading } from '../../components';
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
      <Heading
        firstLine={'Made with'}
        secondLine={'real ingredients'}
        opposite={false}
      />
      <Subheader>
        Big Poppas takes 100% premium grade beef sourced from local ranchers in
        the United States, seasons it to perfection and then lets it air dry for
        14 days until it’s deliciously tender.
      </Subheader>
      <ContentContainer container>
        <Nutrition item lg={3}>
          {items.slice(0, 2).map(item => {
            const { id, desc } = item;
            return (
              <Box key={id}>
                <Container>
                  <BangImg
                    src='images/icons/pizza.svg'
                    alt='validation'
                    ref={setValidation}
                  />
                </Container>

                <Box sx={{ padding: 'calc(.8rem + 1.5vw' }}>
                  <Typography variant='body1' sx={{ textAlign: 'center' }}>
                    {desc}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Nutrition>
        <PizzaContainer item lg={6}>
          <Pizza src='/images/pizza.png' alt='pizza slice' ref={imageRef} />
        </PizzaContainer>
        <Nutrition item lg={3}>
          {items.slice(2, 4).map(item => {
            const { id, desc } = item;
            return (
              <Box key={id}>
                <Container>
                  <BangImg
                    src='images/icons/pizza.svg'
                    alt='validation'
                    ref={setValidation}
                  />
                </Container>

                <Box key={id} sx={{ padding: 'calc(.8rem + 1.5vw' }}>
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
