import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Categories from "../components/HomePage/Categories";
import Featured from "../components/HomePage/Featured";

const HomePage = () => {
  return (
    <Fragment>
      <Hero title='Commandez vos courses en ligne' max='true'>
        {/* <Link to='#category' className='main-link'>
          nos produits
        </Link> */}
        <a href='#category' className='main-link'>
          nos produits
        </a>
      </Hero>
      <Categories />
      <Featured />
    </Fragment>
  );
};

export default HomePage;
