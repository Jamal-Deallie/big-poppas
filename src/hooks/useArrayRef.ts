import { MutableRefObject, useRef } from 'react';

export function useArrayRef<T>(): [
  MutableRefObject<T[]>,
  (ref: T | null) => void
] {
  const refs = useRef<T[]>([]);
  refs.current = [];

  const setRef = (ref: T | null) => {
    if (ref) {
      refs.current.push(ref);
    }
  };

  return [refs, setRef];
}
