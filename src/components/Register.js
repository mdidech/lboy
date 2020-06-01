import React, { useContext, useState } from "react";
import { firebaseAuth } from "../context/firebase";
import firebase from "../context/firebase";
import { ProductContext } from "../context/context";
import { Redirect, Link } from "react-router-dom";
import Title from "./Title";
import { FaInfoCircle } from "react-icons/fa";
const Register = () => {
  const { authUser, setAlert, alert } = useContext(ProductContext);
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [firebaseError, setFirebaseError] = useState(null);
  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register(userCredentials);
    setUserCredentials({
      name: "",
      email: "",
      password: "",
    });
  };
  // const register = async ({ name, email, password }) => {
  //   await firebaseAuth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((userCreated) => {
  //       userCreated.user.updateProfile({
  //         displayName: name,
  //       });
  //       return userCreated;
  //     });
  //   await firebase.collection("users").add({
  //     nom: name,
  //     email: email,
  //     adresse: "",
  //     ville: "",
  //     pays: "",
  //     telephone: "",
  //   });
  // };
  const register = async ({ name, email, password }) => {
    await firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCreated) => {
        await userCreated.user.updateProfile({
          displayName: name,
        });
        firebase.collection("users").add({
          nom: name,
          email: email,
          adresse: "",
          ville: "",
          pays: "",
          telephone: "",
        });
      })
      .catch((err) => {
        setFirebaseError(err.code);
        setAlert("ce compte existe déja ");
      });
  };
  const checkServerErrors = () => {
    if (firebaseError) {
      if (firebaseError === "auth/email-already-in-use") {
        return (
          alert !== null && (
            <div className='alert alert-danger'>
              <FaInfoCircle /> ce compte existe déja
            </div>
          )
        );
      }
    }
  };
  return authUser ? (
    <Redirect to='/' />
  ) : (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='Créer un compte' center />
          <form onSubmit={handleSubmit} className='mt-5'>
            {checkServerErrors()}
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
                type='email'
                required
                className='form-control'
                name='email'
                onChange={handleChange}
                value={userCredentials.email}
                placeholder='email'
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                required
                className='form-control'
                name='password'
                onChange={handleChange}
                value={userCredentials.password}
                placeholder='mot de passe'
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
            <div className='form-group text-center'>
              <p>
                Vous possédez déjà un compte ? :
                <Link to='/login'> CONNECTEZ-VOUS</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
