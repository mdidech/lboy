import React, { Fragment } from "react";
import Info from "../components/ContactPage/Info";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpg";
const AboutPage = () => {
  return (
    <Fragment>
      <Hero img={aboutBcg} />
      <Info />
    </Fragment>
  );
};

export default AboutPage;
