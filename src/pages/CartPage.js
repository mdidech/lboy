import React, { Fragment } from "react";
import CartSection from "../components/CartPage/Cart";
import Hero from "../components/Hero";
// import cartBcg from "../images/storeBcg.jpeg"
import cartBcg from "../images/cart.png";
const CartPage = () => {
  return (
    <Fragment>
      <Hero img={cartBcg} />
      <CartSection />
    </Fragment>
  );
};

export default CartPage;
