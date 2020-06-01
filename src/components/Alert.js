import React, { useContext } from "react";
import { ProductContext } from "../context/context";
import { FaInfoCircle } from "react-icons/fa";
const Alert = () => {
  const { alert } = useContext(ProductContext);
  return (
    alert !== null && (
      <div className='alert alert-danger'>
        <FaInfoCircle /> Email ou mot de passe est incorrect
      </div>
    )
  );
};

export default Alert;
