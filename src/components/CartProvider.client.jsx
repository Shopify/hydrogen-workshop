import { CartProvider as ShopifyCartProvider } from '@shopify/hydrogen/client';
import CartContext, {useCart} from './CartContext.client';
/**
 * TODO: Remove this re-export once we find a long-term solution for
 * mixed Hydrogen Client Components.
 * @see https://github.com/Shopify/hydrogen/issues/383
 */

export default function CartProvider({ children, cart, numCartLines }) {
  return (
    <CartContext>
      <Provider cart={cart} numCartLines={numCartLines}>
        {children}
      </Provider>
    </CartContext>
  );
}

function Provider({children, cart, numCartLines }) {
  const {openCart} = useCart();

  return (
    <ShopifyCartProvider cart={cart} numCartLines={numCartLines} onCreate={openCart} onLineAdd={openCart}>
      {children}
    </ShopifyCartProvider>
  )
}