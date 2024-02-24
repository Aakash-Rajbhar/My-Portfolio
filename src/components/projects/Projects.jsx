import React from "react";
import "./Projects.css";
import project_1 from "../../assets/Project-1.png";
import project_2 from "../../assets/Project-2.png";
import project_3 from "../../assets/Project-3.png";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Some of My Work</span>
      <div className="projects-list container">
        <div className="project">
          <img src={project_1} alt="" className="project-img" />
          <div className="project-details">
            <h3 className="project-heading">Recipe Website</h3>
            <h4 className="project-tools">Reactjs, API, Styled Components</h4>
            <p className="project-desc">
              A Recipe Website created with reactjs with the help of API by
              spoonacular, It showcase hundreds of recipes with multiple
              cuisines and functionality to search for a specific recipe.
            </p>
            <div class="project-link">
              <a
                href="https://github.com/Aakash-Rajbhar/Recipe-Website.git"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
                <span className="project-link-tag">Github Code</span>
              </a>
              <a
                href="https://aakash-rajbhar.github.io/Recipe-Website"
                target="_blank"
              >
                <i class="bx bx-link-alt"></i>
                <span className="project-link-tag">Live Demo</span>
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <img class="project-image" src={project_2} alt="" />
          <div class="project-details">
            <h3 className="project-heading">Nike-Home-Page</h3>
            <h4 className="project-tools">Reactjs, Tailwind CSS</h4>
            <p className="project-desc">
              Nike Home Page is created with react-vite with tailwind CSS to
              replicate the front-end of the Nike's official website. It is
              fully responsive for multiple screens.
            </p>
            <div class="project-link">
              <a
                href="https://github.com/Aakash-Rajbhar/Nike-Landing-Page.git"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
                <span className="project-link-tag">Github Code</span>
              </a>
              <a
                href="https://aakash-rajbhar.github.io/Nike-Landing-Page/"
                target="_blank"
              >
                <i class="bx bx-link-alt"></i>
                <span className="project-link-tag">Live Demo</span>
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <img class="project-image" src={project_3} alt="" />
          <div class="project-details">
            <h3 className="project-heading">Blog Website</h3>
            <h4 className="project-tools">Reactjs, Nodejs, MongoDB</h4>
            <p className="project-desc">
              This project is a simple and interactive blog website where users
              can register, log in, create, and read blogs. It is built using
              the MERN (MongoDB, Express.js, React, Node.js) stack.
            </p>
            <div class="project-link">
              <a
                href="https://github.com/Aakash-Rajbhar/Blog-Website.git"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
                <span className="project-link-tag">Github Code</span>
              </a>
              <a
                href="https://aakash-rajbhar.github.io/Blog-Website"
                target="_blank"
              >
                <i class="bx bx-link-alt"></i>
                <span className="project-link-tag">Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
