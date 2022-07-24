import React, { useState, useEffect } from 'react';
import { Button, ArrowUp } from './styles.js';

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={scrollToTop}>
      <ArrowUp
        width='30'
        height='30'
        viewBox='0 0 16 16'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6 6.987H2.524c-.537 0-.684-.34-.33-.76L7.352.315c.154-.2.39-.315.642-.315.25 0 .488.116.642.315l5.17 5.912c.355.42.206.76-.33.76H10v1c0 3.82-3.165 7.087-6.585 7.883-.254.06-.51.1-.77.125-.268.03-.327-.1-.14-.29 0 0 .05-.055.1-.1 2.05-2.023 3.265-4.744 3.4-7.62v-1l-.004.002z'
          fill='#000'
          fillRule='evenodd'
        />
      </ArrowUp>
    </Button>
  );
}