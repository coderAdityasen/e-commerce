import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [showModal, setshowModal] = useState(false);
  const [cartIteams, setCartIteams] = useState([]);

  const toggle = () => {
    setshowModal(!showModal);
  };


  const addToCart = (item) => {
    const isItemInCart = cartIteams.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartIteams(
        cartIteams.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartIteams([...cartIteams, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartIteams.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartIteams(cartIteams.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartIteams(
        cartIteams.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartIteams([]);
  };

  const getCartTotal = () => {
    return cartIteams.reduce(
      (prev, item) => prev + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <CartContext.Provider
        value={{
          showModal, toggle,
          cartIteams,
          addToCart,
          removeFromCart,
          clearCart,
          getCartTotal,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default function useCartContext() {
  return useContext(CartContext);
}
