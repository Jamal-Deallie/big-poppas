import { useEffect } from 'react';
import { Wrapper, Icon, IconWrap, CarouselContainer } from './styles.js';
import useArrayRef from '../../hooks/useArrayRef';
import { horizontalLoop } from '../../animations/horizontalLoop';

export default function Carousel({ items, reverse }) {
  const [iconRef, setIconRef] = useArrayRef();

  useEffect(() => {
    const config = {
      draggable: false,
      center: false,
      speed: 0.5,
      reversed: reverse,
      repeat: -1,
      snap: false,
    };
    horizontalLoop(iconRef.current, config);
  }, [horizontalLoop]);

  return (
    <CarouselContainer>
      <Wrapper>
        {items.map(item => {
          return (
            <IconWrap key={item.id} ref={setIconRef}>
              <Icon src={item.image} alt={item.alt} />
            </IconWrap>
          );
        })}
      </Wrapper>
    </CarouselContainer>
  );
}
