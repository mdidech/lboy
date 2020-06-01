import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/context";
import { firebaseAuth } from "../context/firebase";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const Sidebar = () => {
  const { links, sidebarOpen, handleSidebar, authUser } = useContext(
    ProductContext
  );
  const logout = async () => {
    await firebaseAuth.signOut();
  };
  return (
    <Fragment>
      <SideWrapper show={sidebarOpen}>
        <div className='menu'>
          <h4 className='text-center'>Menu</h4>
          <ul>
            <li>
              <Link to='/' className='sidebar-link' onClick={handleSidebar}>
                <HomeIcon /> Accueil
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='sidebar-link'
                onClick={handleSidebar}
              >
                <ContactMailIcon /> Contactez-nous
              </Link>
            </li>
            {authUser ? (
              <>
                <li>
                  <Link
                    to='/moncompte'
                    className='sidebar-link'
                    onClick={handleSidebar}
                  >
                    <AccountCircleIcon /> Mon compte
                  </Link>
                </li>
                <li>
                  <Link
                    to='/login'
                    className='sidebar-link'
                    onClick={() => {
                      logout();
                      handleSidebar();
                    }}
                  >
                    <ExitToAppIcon /> Déconnecter
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to='/login'
                    className='sidebar-link'
                    onClick={handleSidebar}
                  >
                    <ExitToAppIcon /> Se connecter
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className='categories'>
          <h4 className='text-center'>Catégories</h4>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className='sidebar-link'
                    onClick={handleSidebar}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </SideWrapper>
    </Fragment>
  );
};
const SideWrapper = styled.nav`
  position: fixed;
  /* top: 65px; */
  top: 63px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 0.85rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }

  @media (min-width: 576px) {
    width: 18rem;
  }
  h4 {
    margin: 0;
    background: #f0ad4e;
    padding: 0.5rem 1rem;
  }
`;

export default Sidebar;
