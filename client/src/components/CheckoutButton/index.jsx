import { useCheckoutItemsMutation } from '../../features/checkout/checkoutSlice.js';
import { CustomButton } from './styles';

export default function CheckoutButton({ items }) {
  const [checkoutItems, { isLoading, isError, isSuccess, data }] =
    useCheckoutItemsMutation();

  console.log(useCheckoutItemsMutation());

  if (isSuccess) {
    window.location.href = data.url;
  } else if (isError) {
    console.error('An Error has occurred');
  }

  const line_items =
    items &&
    items.map(item => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.image],
            description: item.description,
            metadata: {
              id: item._id,
            },
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    });

  const handleCheckout = async () => {
    if (items) {
      try {
        await checkoutItems(line_items);
      } catch (err) {
        console.error('Failed to Checkout', err);
      }
    }
  };

  return <CustomButton onClick={handleCheckout}>Go To Checkout</CustomButton>;
}
