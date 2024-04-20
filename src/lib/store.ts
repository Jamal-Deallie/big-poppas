import Lenis from '@studio-freight/lenis';
import { create } from 'zustand';
type State = {
  navIsOpen: boolean;
  lenis: undefined | Lenis;
};

// type Actions = {
//   increment: (qty: number) => void
//   decrement: (qty: number) => void
// }
type Actions = {
  setNavIsOpen: (value: boolean) => void;
  setLenis: (lenis: Lenis) => void;
};

export const useStore = create<State & Actions>((set) => ({
  navIsOpen: false,
  // increment: (qty: number) => set((state) => ({ count: state.count + qty })),
  // decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
  setNavIsOpen: (value: boolean) => set(() => ({ navIsOpen: value })),
  lenis: undefined,
  setLenis: (lenis: Lenis) => set({ lenis: lenis }),
}));
// import { shallow } from 'zustand/shallow';
// import { createWithEqualityFn } from 'zustand/traditional';

// interface StoreState {
//   navIsOpen: boolean;
//   setNavIsOpen: (value: boolean) => void | boolean;
// }
// export const useStore = createWithEqualityFn<StoreState>(
//   (set) => ({
//     navIsOpen: false,
//     setNavIsOpen: (value: boolean) => set({ setNavIsOpen: value }),
//   }),
//   shallow
// );
