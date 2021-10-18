import {
  ShopifyServerProvider,
  DefaultRoutes,
  CartServerProvider,
} from '@shopify/hydrogen';
import { Switch } from 'react-router-dom';
import { Suspense } from 'react';

import shopifyConfig from '../shopify.config';

import NotFound from './components/NotFound.server';
import CartProvider from './components/CartProvider.client';

export default function App({ ...serverState }) {
  const pages = import.meta.globEager('./pages/**/*.server.(jsx|tsx)');

  return (
    <ShopifyServerProvider shopifyConfig={shopifyConfig} {...serverState}>
      <CartServerProvider request={serverState.request}>
        {({ cart, numCartLines }) => {
          return (
            <CartProvider cart={cart} numCartLines={numCartLines}>
              <Suspense fallback="Loading...">
                <Switch>
                  <DefaultRoutes
                    pages={pages}
                    serverState={serverState}
                    fallback={<NotFound />}
                  />
                </Switch>
              </Suspense>
            </CartProvider>
          );
        }}
      </CartServerProvider>
    </ShopifyServerProvider>
  );
}
