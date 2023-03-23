import React from "react";
import extend from "../styles/Profile.module.css";
import shivam from "../assets/img/ShivamAbhilashTalks.jfif";

const Talks = () => {
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
              <h1 className="h2 text-center mt-3">AI Lens: Data Driven Artificial Intelligence</h1>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-lg-4 col-md-6">
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
      </div>

      <div className="col-lg-4 col-md-6">
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

export default Talks;
