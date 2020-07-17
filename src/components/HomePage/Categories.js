import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/context";

const Categories = () => {
  const { links } = useContext(ProductContext);
  return (
    <CategoryWrapper id='category'>
      <p className='title'>Découvrez nos catégories</p>
      <div className='title-underline'></div>
      <div className='container py-3'>
        <ul className='row categories'>
          {links.map((link) => {
            return (
              <li key={link.id} className='category col-md-4'>
                <Link to={link.path} className='links'>
                  <span className='text-category'> {link.text}</span>
                  <span> {link.icon}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </CategoryWrapper>
  );
};
const CategoryWrapper = styled.div`
  text-align: center;

  /* #category {
    transition: var(--mainTransition);
  } */
  .title-underline {
    height: 0.25rem;
    width: 5rem;
    background: var(--primaryColor);
    margin: 0 auto;
  }
  .title {
    padding-top: 1.5rem;
    /* font-family: "Courgette", cursive; */
    font-family: var(--font-primary);
    text-transform: capitalize;
    font-size: 2rem;
    letter-spacing: var(--mainSpacing);
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
  }
  .categories {
    justify-content: center;
  }
  .category {
    /* margin: 0px 10px; */
    border: 1px solid #a7a9a6;
    border-radius: 5px;
    margin: 5px 5px;
    list-style: none;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: var(--mainTransition);
  }
  .category:hover {
    box-shadow: 5px 5px 0 #a7a9a6;
    /* transition: var(--mainTransition); */
  }
  .links {
    width: 100%;
    text-decoration: none;
    color: var(--darkGrey);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .text-category {
    font-size: 1rem;
    font-weight: bold;
  }
  .icon {
    font-size: 2rem;
    color: var(--primaryColor);
    transition: var(--mainTransition);
  }
`;
export default Categories;
