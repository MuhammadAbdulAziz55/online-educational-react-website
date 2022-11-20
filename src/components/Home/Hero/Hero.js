import React from "react";
import Title from "../../Title/Title";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="WELCOME TO ACADEMIC COACH"
              title="World best online life coach institute"
            />
            <p>
              Dolor exercitation ad do ad labore irure est sunt consequat.
              Dolore veniam amet ipsum adipisicing veniam. Quis do veniam fugiat
              non exercitation magna Lorem nostrud dolore duis. Irure in amet
              quis ullamco consectetur aliqua.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
