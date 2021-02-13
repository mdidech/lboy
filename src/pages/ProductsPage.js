import React, { useContext, useState } from "react";
import Product from "../components/Product2";
import { ProductContext } from "../context/context";
import styled from "styled-components";
const ProductsPage = (props) => {
  const { category } = props.match.params;
  const { filteredProducts } = useContext(ProductContext);
  let ProductsByCategory = filteredProducts.filter(
    (item) => item.categorie === category
  );
  const [searchProducts, setSearchProducts] = useState([]);
  const handleChange = (e) => {
    const products = ProductsByCategory.filter((item) => {
      return item.title.includes(e.target.value.toLowerCase());
    });
    if (e.target.value === "") {
      setSearchProducts([]);
    } else {
      setSearchProducts([...products]);
    }
  };
  return (
    <ProductsWrapper className='py-5'>
      <div className='container-fluid'>
        <p className='subtitle'>{category.replace("_", " ")}</p>
        <form className='my-3'>
          <input
            type='text'
            required
            className='form-control'
            name='titre'
            onChange={handleChange}
            placeholder='Rechercher par produit...'
            autoComplete='off'
          />
        </form>
        <div className='title-underline'></div>
        <div className='row mx-auto px-2 d-flex justify-content-center mt-4'>
          {searchProducts.length > 0
            ? searchProducts.map((product) => {
                return <Product key={product.id} product={product}></Product>;
              })
            : ProductsByCategory.map((product) => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    category={category}
                  ></Product>
                );
              })}
        </div>
      </div>
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.section`
  text-align: center;
  min-height: 90vh;
  max-width: 1250px;
  margin: 0 auto;
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
  .form-control {
    background-color: #fff;
    border: none;
    border-bottom: 1px solid var(--darkGrey);
    border-radius: 0;
    outline: none;
    height: 3rem;
    width: 35%;
    font-size: 16px;
    margin: 0 auto;
    padding: 0 0.75rem;
  }
  .subtitle {
    font-family: "Courgette", cursive;
    text-transform: capitalize;
    font-size: 2rem;
    letter-spacing: var(--mainSpacing);
  }

  @media screen and (max-width: 768px) {
    input {
      width: 80% !important;
    }
  }
`;

export default ProductsPage;
