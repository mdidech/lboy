import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import { ProductContext } from "../context/context";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const Product2 = ({ product }) => {
  const { addToCart, cart, removeItem } = useContext(ProductContext);
  const [count, setCount] = useState(1);
  const increment = () => {
    let countItems = 0;
    if (product.categorie === "fruits_legumes") {
      countItems = count + 0.5;
    } else if (product.categorie === "poissons_viandes") {
      countItems = count + 0.25;
    } else {
      countItems = count + 1;
    }
    setCount(countItems);
  };
  const decrement = () => {
    let countItems = 0;
    if (product.categorie === "fruits_legumes") {
      countItems = count - 0.5;
    } else if (product.categorie === "poissons_viandes") {
      countItems = count - 0.25;
    } else {
      countItems = count - 1;
    }

    if (countItems > 0) {
      setCount(countItems);
    }
  };
  const addedToCart = () => {
    let tempCart = [...cart];
    let tempItem = tempCart.find((item) => item.id === product.id);
    return tempItem ? (
      <TiDelete
        className='icon text-center'
        onClick={() => removeItem(product.id)}
      />
    ) : (
      <FaCartPlus
        className='icon text-center'
        onClick={() => addToCart(product.id, count)}
      />
    );
  };

  return (
    <ProductWrapper>
      <div className='col-md-4 col-lg-2'>
        <div className='card m-2 text-center'>
          <div className='img-container'>
            <img
              src={product.image}
              className='card-img-top p-2'
              alt='product'
              // style={{ height: "180px" }}
            />
          </div>
          <div className='card-body  text-center p-2'>
            <div className='titleProduct'>{product.title}</div>
            <div className='h6'>{product.description}</div>
            <div className='d-flex justify-content-center py-2'>
              <div>
                <FaChevronCircleDown
                  className='cart-icon text-secondary'
                  onClick={() => decrement(product.id)}
                />
                <span className='text-title text-muted mx-3'>{count}</span>
                <FaChevronCircleUp
                  className='cart-icon text-secondary'
                  onClick={() => increment(product.id)}
                />
              </div>
            </div>
          </div>
          <div className='card-footer bg-secondary-light d-flex justify-content-between p-2'>
            <div className='text-price align-self-center'>
              {product.price}dh/
              <span className='text-dark'>{product.unite}</span>
            </div>
            <div className='product-icon'>{addedToCart()}</div>
          </div>
        </div>
      </div>
    </ProductWrapper>
  );
};
const ProductWrapper = styled.div`
  align-items: center;
  margin-bottom: 1.2rem;
  .card {
    margin-bottom: 1rem;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    width: 14rem;
    height: 22rem;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
    height: 180px;
  }
  .card-img-top:hover {
    transform: scale(1.08);
    opacity: 0.35;
    transition: var(--mainTransition);
  }

  .product-icon {
    transition: var(--mainTransition);
  }
  .icon {
    display: inline-block;
    font-size: 2.5rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
  .product-icon:hover {
    transform: scale(1.2);
    transition: var(--mainTransition);
    opacity: 0.5;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    padding: 1rem;
    /* text-transform: uppercase; */
  }
  .titleProduct {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
    color: var(--primaryColor);
    text-transform: uppercase;
  }
  .h6 {
    font-family: Courgette, Arial, sans-serif;
    font-size: 0.75rem;
  }
  .text-price {
    font-weight: bold;
    color: var(--primaryColor);
  }
`;
export default Product2;
