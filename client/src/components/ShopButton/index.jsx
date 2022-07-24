import React, { useRef, useState, useEffect } from 'react';
import {
  StyledButton,
  Wrapper,
  InnerContainer,
  StyledContainer,
  Label,
} from './styles';
import { gsap } from 'gsap';
import { addItem } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

export default function ShopButton({ item }) {
  const el = useRef();
  const [isShown, setIsShown] = useState(false);
  const tl = useRef();

  
  useEffect(() => {
    if (isShown) {
      const q = gsap.utils.selector(el.current);
      let targets = gsap.utils.toArray('#targets');

      gsap.set(q(targets), {
        //width of ele
        x: i => i * 200,
      });
      tl.current = gsap.timeline();

      gsap.to(q(targets), {
        duration: 10,
        ease: 'none',
        x: '+=600', //move each box 600px to right. 3 divs x 200px(div width)
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % 600), //force x value to be between 0 and 600 using modulus
        },
        repeat: -1,
      });
    }
  });

  return (
    <StyledButton
      $bg={isShown ? '#d14334' : null}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      <Wrapper>
        <InnerContainer ref={el}>
          {isShown ? (
            <>
              {[...Array(3)].map((e, i) => (
                <StyledContainer id='targets' key={i} left>
                  <Label>ADD TO CART</Label>
                </StyledContainer>
              ))}
            </>
          ) : (
            <>
              <StyledContainer>
                <Label>ADD TO CART</Label>
              </StyledContainer>
            </>
          )}
        </InnerContainer>
      </Wrapper>
    </StyledButton>
  );
}
