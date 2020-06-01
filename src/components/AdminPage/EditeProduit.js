import React, { useState, useContext, useEffect } from "react";
import firebase from "../../context/firebase";
import { withRouter } from "react-router-dom";
import Title from "../Title";
import { ProductContext } from "../../context/context";
const EditeProduit = (props) => {
  const { storeProducts } = useContext(ProductContext);
  const [produit, setProduit] = useState({
    id: "",
    docId: "",
    image: "",
    title: "",
    description: "",
    categorie: "",
    price: "",
  });

  useEffect(
    () => {
      storeProducts.forEach((item) => {
        const idProduit = props.match.params.idproduit;
        if (item.id === idProduit) {
          setProduit({ ...item });
        }
      });
    }, // eslint-disable-next-line
    [storeProducts]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.collection("produits").doc(produit.docId).update({
      categorie: produit.categorie,
      price: produit.price,
      title: produit.title,
      description: produit.description,
    });
    props.history.push("/admin/produits");
  };
  const handleChange = (e) => {
    setProduit({ ...produit, [e.target.name]: e.target.value });
  };
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='Modifier produit' center />
          <form onSubmit={handleSubmit} className='mt-5'>
            <div className='form-group'>
              <input
                type='text'
                required
                className='form-control'
                name='title'
                onChange={handleChange}
                value={produit.title}
                placeholder='titre'
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                required
                className='form-control'
                name='description'
                onChange={handleChange}
                value={produit.description}
                placeholder='description'
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <select
                className='form-control'
                name='categorie'
                value={produit.categorie}
                required
                onChange={handleChange}
              >
                <option value=''>Categories...</option>
                <option value='fruits_legumes'>fruits et legumes</option>
                <option value='boissons'>boissons</option>
                <option value='bebe'>bébé</option>
                <option value='entretien'>entretien</option>
                <option value='poissons_viandes'>poissons et viandes</option>
                <option value='cuisine'>cuisine</option>
              </select>
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='price'
                value={produit.price}
                required
                onChange={handleChange}
              />
            </div>
            <div className='form-group mt-3'>
              <button type='submit' className='btn btn-primary form-control'>
                Modifier
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withRouter(EditeProduit);
