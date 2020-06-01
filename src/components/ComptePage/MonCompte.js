import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/context";
import Title from "../Title";
import Spinner from "../Spinner";
const MonCompte = () => {
  const { authUser, currentUser } = useContext(ProductContext);
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);
  return (
    <>
      {authUser ? (
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Title title='Mon compte' center />

            <div className='form-group mt-5 py-5'>
              <label htmlFor='nom'>
                <strong> Nom</strong>: {user.nom}
              </label>
              <br />
              <br />
              <label htmlFor='email'>
                <strong> Email</strong>: {user.email}
              </label>
              <br />
              <br />
              <label htmlFor='adresse'>
                <strong> Adresse</strong>: {user.adresse}
              </label>
              <br />
              <br />
              <label htmlFor='ville'>
                <strong> Ville</strong>: {user.ville}
              </label>
              <br />
              <br />
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default MonCompte;
