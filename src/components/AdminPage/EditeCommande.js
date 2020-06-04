import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { ProductContext } from "../../context/context";
import ItemsByCommande from "./ItemsByCommande";
import firebase from "../../context/firebase";
import moment from "moment";
import "moment/locale/fr";
const EditeCommande = (props) => {
  const { ordersList, userDetails } = useContext(ProductContext);
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({ ...userDetails });

  const orderItem = () => {
    ordersList.forEach((item) => {
      const idCom = props.match.params.idcom;
      if (item.id === idCom) {
        setOrder({ ...item });
      }
    });
  };
  useEffect(
    () => {
      orderItem();
      setUser({ ...userDetails });
    }, // eslint-disable-next-line
    [userDetails, ordersList]
  );
  const ChangeStatus = (status) => {
    firebase.collection("orders").doc(order.id).update({
      progress: status,
    });
    props.history.push("/admin");
  };
  const statusButton = () => {
    let status = {
      accepter: "",
      annuler: "",
      delivrer: "",
    };
    if (order.progress === "en attente") {
      status.annuler = "disabled";
      status.delivrer = "disabled";
    } else if (order.progress === "délivrée") {
      status.annuler = "disabled";
      status.delivrer = "disabled";
      status.accepter = "disabled";
    } else {
      status.annuler = "disabled";
      status.accepter = "disabled";
    }
    return (
      <div className='body d-flex justify-content-around my-4'>
        <Link
          to='/admin/commandes'
          className={`btn btn-primary ${status.accepter}`}
          onClick={() => ChangeStatus("acceptée")}
        >
          Accepter
        </Link>
        <Link
          to='/admin/commandes'
          className={`btn btn-danger ${status.annuler}`}
          onClick={() => ChangeStatus("annuler")}
        >
          Annuler
        </Link>
        <Link
          to='/admin/commandes'
          className={`btn btn-success ${status.delivrer}`}
          onClick={() => ChangeStatus("délivrée")}
        >
          Délivrer
        </Link>
      </div>
    );
  };

  return (
    <>
      {order.order ? (
        <EditCommandeWrapper className='container-fluid my-5'>
          <div className='row'>
            <div className='constumer col-lg-5 col-md-10'>
              <div className='title'>
                <h5>Details du consommateur</h5>
              </div>
              <div className='body'>
                <div className='nom d-flex justify-content-between py-2'>
                  <strong>Nom:</strong>
                  <span>{user.nom}</span>
                </div>
                <div className='email d-flex justify-content-between py-2'>
                  <strong>Email:</strong>
                  <span>{user.email}</span>
                </div>
                <div className='phone d-flex justify-content-between py-2'>
                  <strong>Telephone:</strong>
                  <span>{user.telephone}</span>
                </div>
                <div className='ville d-flex justify-content-between py-2'>
                  <strong>Ville:</strong>
                  <span>{user.ville}</span>
                </div>
                <div className='adresse d-flex justify-content-between py-2'>
                  <strong>Adresse:</strong>
                  <span>{user.adresse}</span>
                </div>
              </div>
              <div className='title'>
                <h5>Details Commande</h5>
              </div>
              <div className='body'>
                <div className='nom d-flex justify-content-between py-2'>
                  <strong>reference:</strong>
                  <span>{order.id}</span>
                </div>
                <div className='phone d-flex justify-content-between py-2'>
                  <strong>Date:</strong>
                  <span>
                    {moment(order.date.toDate()).locale("fr").fromNow()}
                  </span>
                </div>
                <div className='phone d-flex justify-content-between py-2'>
                  <strong>Prix total:</strong>
                  <span>{order.total} dhs</span>
                </div>
                {order.order ? (
                  <div className='phone d-flex justify-content-between py-2'>
                    <strong>Nombre:</strong>
                    <span>{order.order.length}</span>
                  </div>
                ) : (
                  <></>
                )}

                <div className='ville d-flex justify-content-between py-2'>
                  <strong>Status:</strong>
                  <span>{order.progress}</span>
                </div>
              </div>
              <div className='title'>
                <h5>Status Commande</h5>
              </div>
              {statusButton()}
            </div>
            <div className='commande col-lg-6 col-md-10'>
              <div className='title'>
                <h5>Panier des produits</h5>
              </div>
              <div className='body'>
                {order.order ? (
                  <ItemsByCommande commande={order.order} />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </EditCommandeWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

const EditCommandeWrapper = styled.div`
  h5 {
    border-bottom: 1px #c0c0c0 solid;
    color: var(--primaryColor);
    padding: 15px 5px;
  }
  .body {
    margin-bottom: 2.5rem;
  }
  .constumer {
    border-radius: 5px;
    border: 1px #c0c0c0 solid;
    margin-right: 15px;
  }
  .commande {
    border-radius: 5px;
    border: 1px #c0c0c0 solid;
  }
`;
export default withRouter(EditeCommande);
