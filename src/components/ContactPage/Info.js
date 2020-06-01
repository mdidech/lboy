import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpg";
const Info = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img
              src={aboutBcg}
              className='img-fluid img-thumbnail'
              alt='about company'
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Title title='contactez-nous' />
            <p className='text-lead text-muted my-3'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              praesentium ex nulla quam nesciunt placeat qui, consequatur
              quidem. Incidunt, repudiandae!
            </p>
            <p className='text-lead text-muted my-3'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              praesentium ex nulla quam nesciunt placeat qui, consequatur
              quidem. Incidunt, repudiandae!
            </p>
            <button
              className='main-link'
              type='button'
              style={{ marginTop: "2rem" }}
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
