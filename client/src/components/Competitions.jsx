import React from "react";
import extend from "../styles/Profile.module.css";
import arhackathon from "../assets/img/ARhackathon.jfif";
import projectPresentation from "../assets/img/projectPresentation.jfif";

const Competitions = () => {
  return (
    <div id="talks" className="row flex justify-content-center">
      <div className="col-lg-4 col-md-6">
        <div
          className={`card ${extend.eventCard} mt-4 mb-5`}
          onClick={() => {
            window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSdTlotNkv3fYFNApR5AGWwfZuSfvVFDtp7qIZdMKbl_U7oyMg/viewform?usp=sf_link";
          }}
        >
          <img className="card-img-top" src={arhackathon} alt="CardImage" />
          <div className="card-body">
            <div className="card-text CardText text-center">
              <h1 className="h2 text-center mt-3">AR Insta Filter Making</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div
          className={`card ${extend.eventCard} mt-4 mb-5`}
          onClick={() => {
            window.location.href = "https://forms.gle/34WpwWd33g18xJxq9";
          }}
        >
          <img
            className="card-img-top"
            src={projectPresentation}
            alt="CardImage"
          />
          <div className="card-body">
            <div className="card-text CardText text-center">
              <h1 className="h2 text-center mt-3">Project Presentation</h1>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="col-lg-4 col-md-6">
        <div
          className={`card ${extend.eventCard} mt-4 mb-5`}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img
            className="card-img-top"
            src="https://ai.iti.gov.eg/wp-content/uploads/2020/05/event.jpg"
            alt="CardImage"
          />
          <div className="card-body">
            <div className="card-text CardText text-center">
              <h1 className="h2 text-center mt-3">EventName</h1>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Competitions;
