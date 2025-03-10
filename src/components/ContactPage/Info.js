import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpg";

const Info = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6'>
            <img
              src={aboutBcg}
              className='img-fluid img-thumbnail'
              alt='about company'
              style={{
                position: "relative",
                background:
                  "linear-gradient(to right,var(--primaryColor),var(--darkGrey))",
              }}
            />
          </div>

          <div className='col-10 mx-auto col-md-6 my-3'>
            <Title title='contactez-nous' center />
            <form className='my-2'>
              <div className='form-group p-1'>
                <input
                  type='text'
                  placeholder='nom'
                  className='form-control'
                  style={styleForm}
                  name='nom'
                />
                <input
                  type='text'
                  placeholder='email'
                  className='form-control'
                  style={styleForm}
                  name='email'
                />
                <textarea
                  rows='5'
                  className='form-control'
                  style={styleForm}
                  name='message'
                  placeholder='message'
                ></textarea>
              </div>
              <button className='main-link' type='button'>
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const styleForm = {
  display: "block",
  width: "100%",
  padding: "0.75rem 1rem",
  border: "none",
  marginBottom: "1.25rem",
  background: "#f1f5f8",
  borderRadius: "var(--radius)",
  textTransform: "uppercase",
};
export default Info;
