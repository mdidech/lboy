import React from "react";
import Hero from "../components/Hero";
import Services from "../components/HomePage/Services";
import Categories from "../components/HomePage/Categories";
import Featured from "../components/HomePage/Featured";
import FraisCourse from "../components/HomePage/FraisCourse";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomeWrapper>
      <Hero title='Commandez vos courses en ligne' max='true'>
        <a href='#category' className='main-link banner-btn my-3'>
          nos produits
        </a>
      </Hero>
      <Services />
      <Categories />
      <Featured />
      <FraisCourse />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  @keyframes show {
    0% {
      transform: scale(1.1);
      opacity: 0;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  .banner-btn {
    animation: show 5s linear 1;
  }
`;
export default HomePage;
