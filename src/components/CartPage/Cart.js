import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <Title title='mon panier' center />
      </div>
      <CartColumns />
      <CartList />
      <CartTotal />
    </section>
  );
};

export default Cart;
