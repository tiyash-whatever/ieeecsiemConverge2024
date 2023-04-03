import React from "react";
import extend from "../styles/Profile.module.css";
import arhackathon from "../assets/img/ARhackathon.jfif";
import projectPresentation from "../assets/img/projectPresentation.jfif";
import ideathon from "../assets/img/ideathon.jfif";
import ppt from "../assets/img/pptPresentation.jfif";
import blind from "../assets/img/blindCoding.jfif";

const Competitions = () => {
  return (
    <>
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

        <div className="col-lg-4 col-md-6">
          <div
            className={`card ${extend.eventCard} mt-4 mb-5`}
            onClick={() => {
              window.location.href =
                "https://docs.google.com/forms/d/1sdXVd6Z0CywHrgp6_1PkYCFRGEc0hmkffC5z8PcWb30/edit?usp=drivesdk";
            }}
          >
            <img className="card-img-top" src={ideathon} alt="CardImage" />
            <div className="card-body">
              <div className="card-text CardText text-center">
                <h1 className="h2 text-center mt-3">Ideathon</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="talks" className="row flex justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div
            className={`card ${extend.eventCard} mt-4 mb-5`}
            onClick={() => {
              window.location.href =
                "https://forms.gle/tqJZ6Borxb2bPPiD8";
            }}
          >
            <img className="card-img-top" src={ppt} alt="CardImage" />
            <div className="card-body">
              <div className="card-text CardText text-center">
                <h1 className="h2 text-center mt-3">PPT Presentation</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div
            className={`card ${extend.eventCard} mt-4 mb-5`}
            onClick={() => {
              window.location.href =
                "https://forms.gle/v9Usf9717Ri8hSWw7";
            }}
          >
            <img className="card-img-top" src={blind} alt="CardImage" />
            <div className="card-body">
              <div className="card-text CardText text-center">
                <h1 className="h2 text-center mt-3">Blind Coding</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Competitions;
