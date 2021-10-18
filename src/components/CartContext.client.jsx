import {createContext, useState, useContext, useMemo} from 'react';

const Cart = createContext(null);

export default function CartContext({children}) {
  const [cartOpen, setCartOpen] = useState(false);
  const value = useMemo(() => {
    return {
      isCartOpen: cartOpen,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      toggleCart: () => setCartOpen(!cartOpen),
    }
  }, [cartOpen, setCartOpen])

  return (
    <Cart.Provider value={value}>
      {children}
    </Cart.Provider>
  );
}

export function useCart() {
  return useContext(Cart);
}