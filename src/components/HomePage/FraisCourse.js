import React from "react";
import styled from "styled-components";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
const FraisCourse = () => {
  return (
    <FraisWrapper className='container'>
      <p className='title'>Livraison & contacts</p>
      <div className='title-underline'></div>
      <div className='row'>
        <article className='col-md-6 fraisCourse'>
          <h2 className='section-title'>conditions de livraison:</h2>
          <div className='frais-info'>
            <div className='d-flex justify-content-between '>
              <h5 className='course-title'>Montant minimum de commande:</h5>
              <strong className='frais'>100dhs </strong>
            </div>
            <div className='d-flex justify-content-between'>
              <h5 className='course-title'> Tarif:</h5>
              <strong className='frais'>25dhs </strong>
            </div>
            <div className='d-flex justify-content-between'>
              <h5 className='course-title'> Horaire:</h5>
              <strong className='frais'>lundi au dimanche de 10h à 18h </strong>
            </div>
          </div>
          <div style={{ fontSize: "0.55rem" }}>
            *dediée uniquement pour la ville de Nador
          </div>
        </article>
        <article className='col-md-6 contact'>
          <h2 className='section-title'>coordonnées:</h2>
          <div className='contact-info'>
            <div className='d-flex justify-content-between '>
              <h5 className='contact-title'>
                <span className='contact-icon'>
                  <FaEnvelope />
                </span>
                Email:
              </h5>
              <strong className='contact-text'>email@email.com</strong>
            </div>
            <div className='d-flex justify-content-between'>
              <h5 className='contact-title'>
                <span className='contact-icon'>
                  <FaPhone />
                </span>
                Telephone:
              </h5>
              <strong className='contact-text'>+ 212 6000000</strong>
            </div>
            <div className='d-flex justify-content-between'>
              <h5 className='contact-title'>
                <span className='contact-icon'>
                  <FaLocationArrow />
                </span>
                Adresse:
              </h5>
              <strong className='contact-text'>tarik ibnou ziad n52</strong>
            </div>
          </div>
        </article>
      </div>
    </FraisWrapper>
  );
};
const FraisWrapper = styled.section`
  min-height: 35vh;
  text-align: center;
  .title-underline {
    height: 0.25rem;
    width: 5rem;
    background: var(--primaryColor);
    margin: 0 auto;
  }

  .title {
    padding-top: 1.5rem;
    font-family: "Courgette", cursive;
    text-transform: capitalize;
    font-size: 2rem;
    letter-spacing: var(--mainSpacing);
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
  }
  .fraisCourse {
    margin: 0 auto;
    padding: 2rem;
  }
  .section-title {
    font-size: 1.5rem;
    font-family: Courgette, Arial, sans-serif;
    color: var(--primaryColor);
    margin-bottom: 1rem;
    text-align: left;
    text-transform: capitalize;
  }

  .frais-info {
    border: 1px solid var(--primaryColor);
    border-radius: 5px;
  }
  .contact-info {
    border: 1px solid var(--primaryColor);
    border-radius: 5px;
  }

  .course-title {
    font-size: 1rem;
    color: var(--primaryColor);
    padding: 0.5rem 0.75rem;
  }
  .frais {
    padding: 0.5rem 0.75rem;
  }
  .contact {
    margin: 0 auto;
    padding: 2rem;
  }
  .contact-item {
    padding-right: 0.75rem;
  }
  .contact-title {
    font-size: 1rem;
    color: var(--primaryColor);
    font-weight: 400;
    padding: 0.5rem 0.75rem;
  }
  .contact-text {
    padding: 0.5rem 0.75rem;
  }
`;
export default FraisCourse;
