import {CartLines, CartLineAttributes, CartLineImage, CartLineProductTitle, CartLinePrice, CartLineQuantity, CartLineQuantityAdjustButton, CartEstimatedCost, CartCheckoutButton, CartShopPayButton} from '@shopify/hydrogen/client';

export default function Cart() {
  return (
    <>
      <CartLines as="table">
        <tr>
          <td><CartLineImage options={{width: 100, height: 100, crop: 'center'}}/></td>
          <td>
            <CartLineProductTitle />
            <CartLineAttributes />
            <CartLineQuantityAdjustButton adjust="decrease">-</CartLineQuantityAdjustButton>
            <CartLineQuantity />
            <CartLineQuantityAdjustButton adjust="increase">+</CartLineQuantityAdjustButton>
          </td>
          <td>
            <CartLinePrice />
            <CartLineQuantityAdjustButton adjust="remove">x</CartLineQuantityAdjustButton>
          </td>
        </tr>
      </CartLines>
      <div>
        <div>Subtotal <CartEstimatedCost as="span" amountType="subtotal"/></div>
        <CartCheckoutButton className="bg-black text-white font-semibold py-4 px-10 rounded-xl">Check out</CartCheckoutButton>
        <CartShopPayButton />
      </div>
    </>
  )
}