import React from "react";

const CartColumns = () => {
  return (
    <div className='container-fluid text-center d-none d-lg-block my-5'>
      <div className='row'>
        <div className='col-lg-2'>
          <p className='text-uppercase'>produits</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>nom du produit</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>prix</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>quantité</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>supprimer</p>
        </div>
        <div className='col-lg-2'>
          <p className='text-uppercase'>total</p>
        </div>
      </div>
    </div>
  );
};

export default CartColumns;
