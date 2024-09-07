import React, { createContext } from "react";
import all_products from '../Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState(getDefaultCart());

  const addToCart = (product_id) => {
    setCart((prevCart) => ({
      ...prevCart, 
      [product_id]: prevCart[product_id] + 1 
    }));
  }

  const removeFromCart = (product_id) => {
    setCart((prevCart) => ({
      ...prevCart, 
      [product_id]: Math.max(prevCart[product_id] - 1, 0) // Prevents negative quantities
    }));
  }

  const emptyCart = () => {
    setCart(getDefaultCart());
  }

  const cartItemsCount = () => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }

  const cartTotal = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      return total + quantity * all_products[id].new_price;
    }, 0);
  }

  const contextValue = {
    all_products,
    cart,
    addToCart,
    removeFromCart,
    emptyCart,
    cartTotal,
    cartItemsCount
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
