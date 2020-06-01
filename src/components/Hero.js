import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg2.jpg";
const Hero = ({ img, title, max, children }) => {
  return (
    <HeroWrapper max={max} img={img}>
      <div className='banner'>
        <h1 className='title'>{title}</h1>
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
  min-height: ${(props) => (props.max === "true" ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props) => props.img}) center center/cover no-repeat fixed;
  .title {
    padding-top: 2rem;
    font-size: 3rem;
    font-family: "Courgette", cursive;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
`;
Hero.defaultProps = {
  img: mainBcg,
};
export default Hero;
