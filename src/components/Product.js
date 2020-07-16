import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import { ProductContext } from "../context/context";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
const Product = ({ product, category }) => {
  const { addToCart, cart } = useContext(ProductContext);
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
      <></>
    ) : (
      <FaCartPlus
        className='icon text-center'
        onClick={() => addToCart(product.id, count)}
      />
    );
  };

  return (
    <ProductWrapper>
      <div className='card m-3 text-center'>
        <div className='img-container'>
          <img
            src={product.image}
            className='card-img-top p-4'
            alt='product'
            // style={{ height: "200px" }}
          />
          <div className='product-icon'>{addedToCart()}</div>
        </div>

        <div className='card-body text-center p-2'>
          <div className='titleProduct'>{product.title}</div>
          <div className='h6'>{product.description}</div>
          <div className='mb-0 text-main'>
            {product.price}dh/
            <span className='text-warning'>{product.unite}</span>
          </div>
          <div className='d-flex justify-content-center py-2'>
            <span className='pr-2'>Quantité:</span>
            <div>
              <FaChevronCircleDown
                className='cart-icon text-primary'
                onClick={() => decrement(product.id)}
              />
              <span className='text-title text-muted mx-3'>{count}</span>
              <FaChevronCircleUp
                className='cart-icon text-primary'
                onClick={() => increment(product.id)}
              />
            </div>
          </div>
        </div>
      </div>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  align-items: center;
  .card {
    margin-bottom: 1rem;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    width: 15rem;
    height: 22rem;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
    height: 200px;
  }
  .card-img-top:hover {
    transform: scale(1.15);
    opacity: 0.35;
    transition: var(--mainTransition);
  }
  .img-container {
    position: relative;
  }
  .product-icon {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    opacity: 0;
  }
  .icon {
    display: inline-block;
    font-size: 4rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
  .card:hover .product-icon {
    opacity: 1;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    padding: 1rem;
    /* text-transform: uppercase; */
  }
  .titleProduct {
    color: var(--primaryColor);
    text-transform: uppercase;
  }
  .h6 {
    font-size: 0.85rem;
  }
`;
export default Product;
