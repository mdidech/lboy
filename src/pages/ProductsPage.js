import React, { useContext, useState } from "react";
import Product from "../components/Product";
import { ProductContext } from "../context/context";
import styled from "styled-components";
const ProductsPage = (props) => {
  const { filteredProducts } = useContext(ProductContext);
  const ProductsByCategory = filteredProducts.filter(
    (item) => item.categorie === props.match.params.category
  );
  const [searchProducts, setSearchProducts] = useState(ProductsByCategory);

  const [produit, setProduit] = useState("");
  const handleChange = (e) => {
    setProduit(e.target.value);
    const products = ProductsByCategory.filter((item) => {
      return item.title.includes(produit);
    });

    setSearchProducts(products);
    console.log(searchProducts);
  };
  return (
    <ProductsWrapper className='py-5'>
      <div className='container-fluid'>
        {/* <Search /> */}
        <p className='subtitle'>{props.match.params.category}</p>
        <form className='my-3'>
          <input
            type='text'
            required
            className='w-25 p-1'
            name='titre'
            onChange={handleChange}
            value={produit}
            placeholder='titre'
            autoComplete='off'
            width='50%'
          />
        </form>
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
