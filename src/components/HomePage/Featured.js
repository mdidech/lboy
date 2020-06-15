import React, { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../../context/context";
import Product from "../Product2";
const Featured = () => {
  const { featuredProducts } = useContext(ProductContext);
  return (
    <FeaturedWrapper>
      <p className='title'>Les plus demandés</p>
      <div className='title-underline'></div>
      <div className='container py-3'>
        <div className='row mx-auto px-2 d-flex justify-content-center'>
          {featuredProducts.map((product) => {
            return <Product key={product.id} product={product}></Product>;
          })}
        </div>
      </div>
    </FeaturedWrapper>
  );
};
const FeaturedWrapper = styled.div`
  text-align: center;
  .title-underline {
    height: 0.25rem;
    width: 5rem;
    background: var(--primaryColor);
    margin: 0 auto;
  }
  .title {
    padding-top: 1.5rem;
    font-family: "Courgette", cursive;
    text-transform: capitalize;
    font-size: 2rem;
    letter-spacing: var(--mainSpacing);
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
  }
  .featured {
    /* justify-content: center; */
  }
`;
export default Featured;
