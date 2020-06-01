import React, { useState } from "react";
import { firebaseStorage } from "../../context/firebase";
import firebase from "../../context/firebase";
import { withRouter } from "react-router-dom";
import Title from "../Title";
// import { ProductContext } from "../../context/context";
import uuid from "uuid/dist/v4";
const AjoutProduit = (props) => {
  const [produit, setProduit] = useState({
    image: "",
    title: "",
    description: "",
    categorie: "",
    prix: "",
  });
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image);
    handleImageUpload();
  };
  const handleImageUpload = () => {
    const uploadImage = firebaseStorage.ref(`img/${image.name}`).put(image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        console.log("uploading...");
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        firebaseStorage
          .ref("img")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            const { title, description, prix, categorie } = produit;
            const newProduit = {
              id: uuid(),
              title,
              description,
              price: prix,
              categorie,
              featured: false,
              image: url,
            };
            firebase.collection("produits").add(newProduit);
            props.history.push("/admin");
          });
      }
    );
  };
  const handleChange = (e) => {
    setProduit({ ...produit, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const imageProduit = e.target.files[0];
      setImage(imageProduit);
    }
  };
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='Ajouter produit' center />
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
                type='number'
                required
                className='form-control'
                name='prix'
                onChange={handleChange}
                value={produit.prix}
                placeholder='prix'
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <input
                type='file'
                required
                className='form-control'
                name='image'
                onChange={handleFileChange}
              />
            </div>
            <div className='form-group mt-3'>
              <button type='submit' className='btn btn-primary form-control'>
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withRouter(AjoutProduit);
