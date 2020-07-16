import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg3.jpg";
import { motion } from "framer-motion";
const Hero = ({ img, title, max, children }) => {
  return (
    <HeroWrapper max={max} img={img}>
      <div className='banner'>
        <motion.h1
          className='title'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 3 }}
        >
          {title}
        </motion.h1>
        {children}
      </div>
    </HeroWrapper>
  );
};
const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max === "true" ? "65vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props) => props.img}) center/cover no-repeat fixed;
  background-size: 100vw 100vh;
  /* @keyframes slideFromRight {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    50% {
      transform: translateX(-200px);
      opacity: 0.5;
    }
    75% {
      transform: translateX(50px);
      opacity: 0.75;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  .banner h1 {
    animation: slideFromRight 5s ease-in-out 1;
  } */
  .title {
    padding-top: 2rem;
    font-size: 3rem;
    font-family: "Courgette", cursive;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
  @media screen and (max-width: 598px) {
    background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
      url(${(props) => props.img}) bottom left/cover no-repeat fixed;
  }
`;
Hero.defaultProps = {
  img: mainBcg,
};
export default Hero;
