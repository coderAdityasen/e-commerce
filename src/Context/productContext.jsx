import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light")


  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setshowModal] = useState(false);
  const [cartIteams, setCartIteams] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  useEffect(() => {
    setLoading(true);
  
    const fetchData = async () => {
      try {
        const fetchedData = await axios.get(
          "https://dummyjson.com/products"
        );
        setProducts(fetchedData.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:" , error);
        setLoading(false);
      }
    };
  
    fetchData();
  
  }, []);
  
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  const [wishlistItems, setWishlistItems] = useState([]);

  const toggle = () => {
    setshowModal(!showModal);
  };

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems ,{...item}]);
    // wishlist : true
  };

  const removeFromWishlist = (item) => {
    setWishlistItems(wishlistItems.filter((prod) => prod.id !== item.id));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
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
    const isItemInCart = cartIteams.find((cartItem) => cartItem.id == item.id);
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

  useEffect(() => {
    const data = localStorage.getItem("cartItems");
    if (data) {
      setCartIteams(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartIteams));
  }, [cartIteams]);

  return (
    <>
      <CartContext.Provider
        value={{
          lightTheme,
          darkTheme,
          themeMode,
          search,
          setSearch,
          loading,
          setLoading,
          products,
          setProducts,
          clearWishlist,
          wishlistItems,
          setWishlistItems,
          addToWishlist,
          removeFromWishlist,
          showModal,
          toggle,
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
