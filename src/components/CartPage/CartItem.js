import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";
const CartItem = ({ cartItem, increment, decrement, remove }) => {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <div className='row mt-5 mt-lg-0 text-capitalize text-center align-item-center'>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <img src={image} alt='produit' width='60' className='img-fluid' />
      </div>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <span className='d-lg-none'>produit :</span>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <span className='d-lg-none'>Prix unitaire :</span>
        {price} Dhs
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <FaChevronCircleDown
              className='cart-icon text-primary'
              onClick={() => decrement(id)}
            />
            <span className='text-title text-muted mx-3'>{count}</span>
            <FaChevronCircleUp
              className='cart-icon text-primary'
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <FaTrash className='cart-icon text-danger' onClick={() => remove(id)} />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong className='text-muted'>total : {total} Dhs</strong>
      </div>
    </div>
  );
};

export default CartItem;
