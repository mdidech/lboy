import React, { Fragment } from "react";
import Hero from "../Hero";
import defaultBcg from "../../images/defaultBcg.jpg";
import { Link } from "react-router-dom";
const UnAuthenticated = () => {
  return (
    <Fragment>
      <Hero max='true' img={defaultBcg}>
        <h2 className='text-uppercase'>Désolé, vous etez pas authentifié</h2>
        <Link to='/login' className='main-link' style={{ marginTop: "2rem" }}>
          se connecter
        </Link>
      </Hero>
    </Fragment>
  );
};

export default UnAuthenticated;
