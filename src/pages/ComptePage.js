import React, { useContext } from "react";
import { Switch, Link, Route } from "react-router-dom";
import ModifierCompte from "../components/ComptePage/ModifierCompte";
import MonCompte from "../components/ComptePage/MonCompte";
import Historique from "../components/ComptePage/Historique";
import Status from "../components/ComptePage/Status";
import UnAuthenticated from "../components/ComptePage/UnAuthenticated";
import { ProductContext } from "../context/context";
const ComptePage = () => {
  const { getUserOrder, GetOrderPanding, authUser } = useContext(
    ProductContext
  );
  return (
    <section style={{ minHeight: "80vh" }}>
      {authUser ? (
        <div className='container my-5'>
          <div className='row'>
            <ul className='nav justify-content-center col-10  mx-auto pt-3'>
              <li className='nav-item'>
                <Link to='/moncompte' className='nav-link'>
                  Mon compte
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/moncompte/1' className='nav-link'>
                  modifier le Compte
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/moncompte/2'
                  className='nav-link'
                  onClick={() => {
                    getUserOrder();
                    GetOrderPanding();
                  }}
                >
                  Historique des commandes
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/moncompte/3'
                  className='nav-link'
                  onClick={() => {
                    getUserOrder();
                    GetOrderPanding();
                  }}
                >
                  commandes en attente
                </Link>
              </li>
            </ul>
            <div
              className='col-10  mx-auto mb-5'
              style={{
                overflow: "auto",
                background: "white",
                border: "2px solid grey",
                borderRadius: "5px",
                width: "400px",
                height: "500px",
                color: "black",
                boxShadow: "5px 8px 3px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Switch>
                <Route exact path='/moncompte' component={MonCompte} />
                <Route exact path='/moncompte/1' component={ModifierCompte} />
                <Route exact path='/moncompte/2' component={Historique} />
                <Route exact path='/moncompte/3' component={Status} />
              </Switch>
            </div>
          </div>
        </div>
      ) : (
        <UnAuthenticated />
      )}
    </section>
  );
};

export default ComptePage;
