import React, { useContext, useState } from "react";
import { firebaseAuth } from "../context/firebase";
import { ProductContext } from "../context/context";
import { Redirect, Link } from "react-router-dom";
import Title from "./Title";
import Alert from "./Alert";
const Login = () => {
  const { authUser, setAlert } = useContext(ProductContext);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [firebaseError, setFirebaseError] = useState(null);
  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userCredentials);
    await setUserCredentials({
      email: "",
      password: "",
    });
  };
  const login = ({ email, password }) => {
    try {
      firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .then((userLogged) => {
          // console.log(userLogged);
        })
        .catch((err) => {
          setFirebaseError(err.code);
          setAlert("Email ou mot de passe est incorrect");
        });
    } catch (err) {
      console.log(err);
    }
  };
  const checkServerErrors = () => {
    if (firebaseError) {
      if (
        firebaseError === "auth/wrong-password" ||
        firebaseError === "auth/user-not-found"
      ) {
        return <Alert />;
      }
    }
  };

  return authUser ? (
    <Redirect to='/' />
  ) : (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='Se connecter' center />

          <form onSubmit={handleSubmit} className='mt-5'>
            {checkServerErrors()}
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
                Se Connecter
              </button>
            </div>
            <div className='form-group text-center'>
              <p>
                Créer votre compte :<Link to='/register'> INSCRIVEZ-VOUS</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
