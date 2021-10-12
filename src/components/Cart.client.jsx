import {CartLines, CartLineAttributes, CartLineImage, CartLineProductTitle, CartLinePrice, CartLineQuantity, CartLineQuantityAdjustButton, CartEstimatedCost, CartCheckoutButton, CartShopPayButton} from '@shopify/hydrogen/client';

export default function Cart() {
  return (
    <>
      <CartLines as="ul">
        <div className="grid grid-cols-3">
          <CartLineImage options={{width: 100, height: 100, crop: 'center'}}/>
          <div>
            <CartLineProductTitle />
            <CartLineAttributes />
            <CartLineQuantityAdjustButton adjust="decrease">-</CartLineQuantityAdjustButton>
            <CartLineQuantity />
            <CartLineQuantityAdjustButton adjust="increase">+</CartLineQuantityAdjustButton>
          </div>
          <div>
            <CartLinePrice />
            <CartLineQuantityAdjustButton adjust="remove">x</CartLineQuantityAdjustButton>
          </div>
        </div>
      </CartLines>
      <div>
        <CartEstimatedCost amountType="subtotal"/>
        <CartCheckoutButton className="bg-black text-white font-semibold py-4 px-10 rounded-xl">Check out</CartCheckoutButton>
        <CartShopPayButton />
      </div>
    </>
  )
}