import React, { useState } from 'react';
import { CartIcon } from './styles';
import { Badge, Drawer, Button } from '@mui/material';
import { CartItems } from '../../components';
import { useSelector } from 'react-redux';
import { selectCartQuantity } from '../../features/cart/cartSlice.js';

export default function Cart() {
  const [open, setOpen] = useState(false);

  const itemQuantity = useSelector(selectCartQuantity);
  function handleClick() {
    setOpen(open => !open);
  }

  return (
    <>
      <Button onClick={handleClick}>
        <Badge badgeContent={itemQuantity} color='warning'>
          <CartIcon src='/images/icons/basket-1.svg' alt='cart icon' />
        </Badge>
      </Button>
      <Drawer anchor='right' open={open} onClose={handleClick}>
        <CartItems handleClick={handleClick} open={open} />
      </Drawer>
    </>
  );
}
