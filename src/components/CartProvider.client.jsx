import { CartProvider as ShopifyCartProvider } from '@shopify/hydrogen/client';

/**
 * TODO: Remove this re-export once we find a long-term solution for
 * mixed Hydrogen Client Components.
 * @see https://github.com/Shopify/hydrogen/issues/383
 */

export default function CartProvider({ children, cart, numCartLines }) {
  return (
    <ShopifyCartProvider cart={cart} numCartLines={numCartLines}>
      {children}
    </ShopifyCartProvider>
  );
}
