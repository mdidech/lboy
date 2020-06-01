import React, { useContext } from "react";
import { ProductContext } from "../context/context";
import styled from "styled-components";

const Footer = () => {
  const { socialIcons } = useContext(ProductContext);
  return (
    <FooterWrapper>
      <div className='container-fluid py-3 mx-auto'>
        <div className='row'>
          <div className=' col-lg-6 col-md-12'>
            <p className='text-capitalize copyright'>
              copyright &copy; lbody delivery 2020. all rights reserved
            </p>
          </div>
          <div className='col-lg-6 col-md-12  d-flex justify-content-around'>
            {socialIcons.map((item) => (
              <a href={item.url} key={item.id}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    width: 100vw;
  }
  .copyright {
    font-size: 0.85rem;
    text-align: center;
  }
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
export default Footer;
