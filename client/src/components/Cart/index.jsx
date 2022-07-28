import React, { useState } from 'react';
import { CartIcon } from './styles';
import { Badge, Drawer, Box } from '@mui/material';
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
      <Box onClick={handleClick} sx={{ ml: '1rem' }}>
        <Badge badgeContent={itemQuantity} color='warning'>
          <CartIcon src='/images/icons/basket-1.svg' alt='cart icon' />
        </Badge>
      </Box>
      <Drawer anchor='right' open={open} onClose={handleClick}>
        <CartItems
          handleClick={handleClick}
          open={open}
          quantity={itemQuantity}
        />
      </Drawer>
    </>
  );
}
