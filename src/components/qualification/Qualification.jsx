import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data" >
              <div data-aos='fade-up'>
                <h3 className="qualification__title">
                  Bachelor's in Technology - IT
                </h3>
                <span className="qualification__subtitle">
                  Guru Gobind Singh Indrapratha University, Delhi
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data"  >
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div data-aos='fade-up' data-aos-delay='200'>
                <h3 className="qualification__title">High School - PCM</h3>
                <span className="qualification__subtitle">
                  Govt Boys Senior Secondary School Kalkaji, New Delhi
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div data-aos='fade-up'>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Guru Gobind Singh Indrapratha University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div data-aos='fade-up' data-aos-delay='200'>
                <h3 className="qualification__title">
                  Data Structures & Algorithms
                </h3>
                <span className="qualification__subtitle">
                  Guru Gobind Singh Indraprastha University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div data-aos='fade-up' data-aos-delay='400'>
                <h3 className="qualification__title">Java Programming</h3>
                <span className="qualification__subtitle">
                  Guru Gobind Singh Indrapratha University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div data-aos='fade-up' data-aos-delay='600'>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Guru Gobind Singh Indraprastha University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import "./Qualification.css";

export default Qualification;
