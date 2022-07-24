import { useEffect } from 'react';
import {
  CardButton,
  ButtonOuter,
  Label,
  ButtonInner,
  ButtonWrap,
} from './styles';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import useArrayRef from '../../hooks/useArrayRef';
import { horizontalLoop } from '../../animations/horizontalLoop';

export default function ATCButton({ items }) {
  const { _id, price, image, name } = items;
  const dispatch = useDispatch();

  const handleAddToCart = product => {
    console.log({ product });
    if (product) {
      dispatch(
        addItem({
          ...product,
        })
      );
    } else {
      console.log('An error has occurred');
    }
  };

  return (
    <CardButton
      onClick={() =>
        handleAddToCart({
          _id: _id,
          price: price,
          name: name,
          image: image,
        })
      }>
      Add to Cart
    </CardButton>
  );
}
