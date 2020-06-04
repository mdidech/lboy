import React, { Fragment, useContext } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { ProductContext } from "../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { firebaseAuth } from "../context/firebase";
const Navbar = () => {
  const {
    cartItems,
    handleSidebar,
    authUser,
    GetOrderPanding,
    logoutUser,
  } = useContext(ProductContext);

  const logout = async () => {
    await firebaseAuth.signOut().then(() => {
      GetOrderPanding();
      logoutUser();
      console.log(authUser);
    });
  };
  return (
    <Fragment>
      <NavWrapper>
        <div className='container'>
          <div className='row nav-center'>
            <div className='col-4'>
              <FaBars className='nav-icon' onClick={handleSidebar} />
            </div>
            <div className='col-4 text-center'>
              <Link to='/'>
                <img src={Logo} alt='logo' className='logo-title' />
              </Link>
            </div>

            <div className='col-4 d-flex justify-content-end'>
              {authUser ? (
                <>
                  <div className='authen text-center'>
                    <Link to='/moncompte' className='auth'>
                      {authUser.email}
                    </Link>
                    |
                  </div>

                  <div className='authen text-center'>
                    <Link to='/login' className='auth' onClick={logout}>
                      Déconnecter
                    </Link>
                    |
                  </div>
                </>
              ) : (
                <div className='authen text-center'>
                  <Link to='/login' className='auth'>
                    Se connecter
                  </Link>
                  |
                </div>
              )}

              <div className='nav-cart'>
                <Link to='/cart'>
                  <FaCartPlus className='nav-icon' />
                  <div className='cart-items text-center'>{cartItems}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </NavWrapper>
    </Fragment>
  );
};
const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0.3rem 1.4rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    align-items: center;
  }
  .auth {
    font-family: Courgette, Arial, sans-serif;
    font-size: 0.95rem;
    text-decoration: none;
    margin: 0 15px;
    cursor: pointer;
    color: var(--darkGrey);
    align-items: center;
  }
  .auth:hover {
    color: var(--primaryColor);
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
    padding-left: 0.55rem;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    left: 25px;
    padding: 0 5px;
    border-radius: 50%;
  }
  .logo-title {
    display: inline-block;
    width: 90px;
    height: 50px;
  }
  span {
    padding-right: 0.75rem;
    cursor: pointer;
  }
  @media (max-width: 576px) {
    .authen {
      display: none;
    }
  }
`;
export default Navbar;
