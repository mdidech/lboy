import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../context/context";
import styled from "styled-components";
const ProductsPage = (props) => {
  const { filteredProducts } = useContext(ProductContext);
  const ProductsByCategory = filteredProducts.filter(
    (item) => item.categorie === props.match.params.category
  );
  return (
    <ProductsWrapper className='py-5'>
      <div className='container-fluid'>
        <p className='subtitle'>{props.match.params.category}</p>
        <div className='title-underline'></div>
        <div className='row mx-auto px-2 d-flex justify-content-center '>
          {ProductsByCategory.map((product) => {
            return <Product key={product.id} product={product}></Product>;
          })}
        </div>
      </div>
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.section`
  text-align: center;
  min-height: 90vh;
  .title-underline {
    height: 0.25rem;
    width: 5rem;
    background: var(--primaryColor);
    margin: 0 auto;
  }
  .title {
    padding-top: 1.5rem;
    font-family: "Courgette", cursive;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
  .subtitle {
    font-family: "Courgette", cursive;
    text-transform: capitalize;
    font-size: 2rem;
    letter-spacing: var(--mainSpacing);
  }
`;

export default ProductsPage;
