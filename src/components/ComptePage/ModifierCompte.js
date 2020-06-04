import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/context";
import Spinner from "../Spinner";
import Title from "../Title";
import firebase from "../../context/firebase";
const MonCompte = () => {
  const { authUser, userDocId, getUser } = useContext(ProductContext);

  const [userCredentials, setUserCredentials] = useState({
    name: "",
    adresse: "",
    ville: "",
    telephone: "",
  });

  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser();
    update(userCredentials);
    setUserCredentials({
      name: "",
      adresse: "",
      ville: "",
      telephone: "",
    });
  };
  const update = ({ name, adresse, ville, telephone }) => {
    firebase.collection("users").doc(userDocId).update({
      nom: name,
      adresse: adresse,
      ville: ville,
      telephone: telephone,
    });
  };
  return (
    <div>
      {authUser ? (
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Title title='modifier le Compte' center />
            <form onSubmit={handleSubmit} className='mt-5'>
              <div className='form-group'>
                <label htmlFor='email'>{authUser.email}</label>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  required
                  className='form-control'
                  name='name'
                  onChange={handleChange}
                  value={userCredentials.name}
                  placeholder='Nom et Prénom'
                  autoComplete='off'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  required
                  className='form-control'
                  name='adresse'
                  onChange={handleChange}
                  value={userCredentials.adresse}
                  placeholder='Adresse'
                  autoComplete='off'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  required
                  className='form-control'
                  name='ville'
                  onChange={handleChange}
                  value={userCredentials.ville}
                  placeholder='Ville'
                  autoComplete='off'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  required
                  className='form-control'
                  name='telephone'
                  onChange={handleChange}
                  value={userCredentials.telephone}
                  placeholder='Numero du telephone'
                  autoComplete='off'
                />
              </div>
              <div className='form-group mt-3'>
                <button
                  type='submit'
                  className='form-control bg-primary text-white'
                >
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MonCompte;
