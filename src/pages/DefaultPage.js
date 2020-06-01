import React, { Fragment } from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpg";
import { Link } from "react-router-dom";
const DefaultPage = () => {
  return (
    <Fragment>
      <Hero title='404' max={true} img={defaultBcg}>
        <h2 className='text-uppercase'>
          Désolé, ce contenu n’est pas disponible actuellement.
        </h2>
        <Link to='/' className='main-link' style={{ marginTop: "2rem" }}>
          page d'accueil
        </Link>
      </Hero>
    </Fragment>
  );
};

export default DefaultPage;
