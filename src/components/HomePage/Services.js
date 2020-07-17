import React from "react";
import styled from "styled-components";
import { FaUserPlus, FaSearchPlus } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
const Services = () => {
  return (
    <ServicesWrapper className='container-fluid'>
      <div className='row'>
        <article className='skill col-md-4'>
          <span className='skill-icon'>
            <FaUserPlus />
          </span>
          <h4 className='skill-title'>Inscrivez-vous sur lboy</h4>
        </article>
        <article className='skill col-md-4'>
          <span className='skill-icon'>
            <FaSearchPlus />
          </span>
          <h4 className='skill-title'>Commandez vos courses en ligne</h4>
        </article>
        <article className='skill col-md-4'>
          <span className='skill-icon'>
            <GoLocation />
          </span>
          <h4 className='skill-title'>Recevez vos courses à votre domicile</h4>
        </article>
      </div>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.section`
  /* max-width: 100%; */
  background: #f1f5f8;
  text-align: center;
  .skill {
    padding: 2.5rem 0;
    text-align: center;
    transition: var(--mainTransition);
    /* animation */
  }
  .skill:hover {
    background: var(--mainGrey);
    box-shadow: 0 2px var(--primaryColor);
  }
  .skill-icon {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
    transition: var(--mainTransition);
    display: inline-block;
    color: var(--primaryColor);
  }
  .skill:hover .skill-icon {
    transform: translateY(-5px);
  }
  .skill-title {
    font-size: 1.35rem;
    margin: 0 auto;
    max-width: 85vw;
    font-family: var(--font-primary);
    /* font-weight: 700; */
  }
`;

export default Services;
