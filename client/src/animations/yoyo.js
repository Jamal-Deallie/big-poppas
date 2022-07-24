import { gsap } from 'gsap';

export const yoyoAnimation = elem => {
  gsap.to(elem, { y: -25, repeat: -1, yoyo: true, duration: 1 });
};
