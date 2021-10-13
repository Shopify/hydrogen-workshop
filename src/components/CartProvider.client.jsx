import {useCallback} from 'react';
import { CartProvider as ShopifyCartProvider } from '@shopify/hydrogen/client';
import { useHistory } from "react-router-dom";
/**
 * TODO: Remove this re-export once we find a long-term solution for
 * mixed Hydrogen Client Components.
 * @see https://github.com/Shopify/hydrogen/issues/383
 */

export default function CartProvider({ children, cart, numCartLines }) {
  const history = useHistory();

  const redirect = useCallback(() => {
    history.push('/cart')
  }, [])

  return (
    <ShopifyCartProvider cart={cart} numCartLines={numCartLines} onCreate={redirect} onLineAdd={redirect}>
      {children}
    </ShopifyCartProvider>
  );
}
