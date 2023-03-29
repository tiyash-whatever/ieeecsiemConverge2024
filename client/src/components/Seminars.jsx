import React from "react";
import extend from "../styles/Profile.module.css";
import shivam from "../assets/img/ShivamAbhilashTalks.jfif";
import arijit from "../assets/img/ArijitHajra.jfif";
import subodh from "../assets/img/subodhG.jfif"

const Seminars = () => {
  return (
    <div id="talks" className="row flex justify-content-center">
      <div className="col-lg-4 col-md-6">
        <div
          className={`card ${extend.eventCard} mt-4 mb-5`}
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/posts/ieee-iemsb_presenting-to-you-mr-shivam-abhilash-the-activity-7043932724650246144-aDgb?utm_source=share&utm_medium=member_android";
          }}
        >
          <img className="card-img-top" src={shivam} alt="CardImage" />
          <div className="card-body">
            <div className="card-text CardText text-center">
              <h1 className="h2 text-center mt-3">
                AI Lens: Data Driven Artificial Intelligence
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div
          className={`card ${extend.eventCard} mt-4 mb-5`}
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/posts/ieee-iemsb_ieee-iem-sb-is-honoured-to-have-arijit-hajra-activity-7046504881699909632-2zbt?utm_source=share&utm_medium=member_android";
          }}
        >
          <img className="card-img-top" src={arijit} alt="CardImage" />
          <div className="card-body">
            <div className="card-text CardText text-center">
              <h1 className="h2 text-center mt-3">
                Sleeping on the roads to the Robot Man of Bengal: A Bootstraped
                Journey of an Entrepreneur
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div
          className={`card ${extend.eventCard} mt-4 mb-5`}
          onClick={() => {
            window.location.href = "https://www.linkedin.com/posts/ieee-iemsb_register-here-elevate2023coinregister-activity-7046100219326840832-JnAJ?utm_source=share&utm_medium=member_android";
          }}
        >
          <img
            className="card-img-top"
            src={subodh}
            alt="CardImage"
          />
          <div className="card-body">
            <div className="card-text CardText text-center">
              <h1 className="h2 text-center mt-3">Future of the Internet</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seminars;
