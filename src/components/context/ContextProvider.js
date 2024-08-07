import React, { useState, useEffect } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    return storedCartItems || [];
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishList"));
    return storedWishlist || [];
  });
  const [discount, setDiscount] = useState(() => {
    const storedDiscount = localStorage.getItem("discount");
    return storedDiscount ? parseFloat(storedDiscount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    localStorage.setItem("discount", discount.toString());
  }, [discount]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity }];
      }
    });
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeCartItem = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const applyDiscount = (value) => {
    setDiscount(value);
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevWishlistItems) => {
      const existingProduct = prevWishlistItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        return prevWishlistItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevWishlistItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeWishlistItem = (itemId) => {
    setWishlistItems((prevWishlistItems) =>
      prevWishlistItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        wishlistItems,
        discount,
        addToCart,
        updateCartItemQuantity,
        removeCartItem,
        applyDiscount,
        addToWishlist,
        removeWishlistItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
