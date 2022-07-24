import { gsap } from 'gsap';

export const rotationAnimation = elem => {
  gsap.to(elem, { rotation: '+=360', repeat: -1, ease: 'none', duration: 3 });
};
