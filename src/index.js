import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/layout/about/About";
import Products from "./components/layout/products/Products";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Contact from "./components/layout/contact/Contact";
import ProductDetails from "./components/layout/products/ProductDetails";
import ShopingCart from "./components/layout/products/shopingCarts/ShopingCart";
import ContextProvider from "./components/context/ContextProvider";
import StripePayment from "./components/layout/products/stripePayment/StripePayment";
import Wishlist from "./components/layout/wishList/Wishlist";
import HomeIndex from "./components/layout/home/HomeIndex";
import FAQ from "./components/layout/faq/FAQ";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomeIndex />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/shopping-cart" element={<ShopingCart />} />
            <Route path="/stripe-payment" element={<StripePayment />} />
            <Route path="/wish-list" element={<Wishlist />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
