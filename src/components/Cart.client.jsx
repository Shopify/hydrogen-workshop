import {CartLines, CartLine, CartEstimatedCost, CartCheckoutButton} from '@shopify/hydrogen/client';

export default function Cart() {
  return (
    <div>
      <CartLines>
        <CartLine.Image options={{width: 75, height: 75, crop: 'center'}}/>
        <CartLine.ProductTitle />
        <CartLine.QuantityAdjustButton>+</CartLine.QuantityAdjustButton>
        <CartLine.Quantity />
        <CartLine.QuantityAdjustButton adjust="decrease">-</CartLine.QuantityAdjustButton>
        <CartLine.Price />
        <CartLine.QuantityAdjustButton adjust="remove">Remove</CartLine.QuantityAdjustButton>
      </CartLines>
      Subtotal: <CartEstimatedCost amountType="subtotal"></CartEstimatedCost>
      Total: <CartEstimatedCost amountType="total"></CartEstimatedCost>
      <CartCheckoutButton>Check out now</CartCheckoutButton>
    </div>
  )
}