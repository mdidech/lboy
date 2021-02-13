import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ProductContext } from "../../context/context";
const CartList = () => {
  const { cart, increment, decrement, removeItem } = useContext(ProductContext);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          {cart.length === 0 ? (
            <h4 className='text-title text-center my-4'>Mon panier est vide</h4>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  cartItem={item}
                  increment={increment}
                  decrement={decrement}
                  remove={removeItem}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartList;
