import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/context";
import firebase from "../../context/firebase";
import ModalCart from "./ModalCart";
import ModalCartVide from "./ModalCartVide";
import ModalCompleteProfile from "./ModalCompleteProfile";
const CartTotal = () => {
  const {
    clearCart,
    cartTotal,
    cart,
    authUser,
    getUserOrder,
    currentUser,
  } = useContext(ProductContext);
  const [cartVide, setCartVide] = useState(true);
  const [auth, setAuth] = useState("/moncompte");
  useEffect(() => {
    if (cartTotal === 0) {
      setCartVide(true);
    } else {
      setCartVide(false);
    }
    // eslint-disable-next-line
  }, []);

  const orders = cart.map((order) => {
    return {
      id: order.id,
      nom: order.title,
      quantite: order.count,
      desc: order.categorie,
      prix: order.price,
      somme: order.total,
    };
  });
  const validCart = () => {
    if (cartTotal && authUser) {
      firebase.collection("orders").add({
        progress: "en attente",
        order: orders,
        total: cartTotal,
        user: authUser.email,
        date: new Date(),
      });
      clearCart();
      getUserOrder();
      setCartVide(true);
    } else {
      setAuth("/login");
    }
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col text-title text-center my-4'>
          <button
            className='btn btn-outline-danger text-capitalize mb-4'
            onClick={() => {
              clearCart();
              setCartVide(true);
            }}
          >
            vider panier
          </button>
          <h3>Total: {cartTotal} dhs</h3>
          {cartVide ? (
            <ModalCartVide />
          ) : currentUser !== null ? (
            currentUser.adresse || currentUser.telephone ? (
              <ModalCart validCart={validCart} auth={auth} />
            ) : (
              <ModalCompleteProfile />
            )
          ) : (
            <ModalCompleteProfile />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
