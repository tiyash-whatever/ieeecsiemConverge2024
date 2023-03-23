import React from "react";
import extend from "../styles/Profile.module.css";
import threeDPri from "../assets/img/3dPrintingWorkshop.jfif";

const Workshops = () => {
  return (
    <div id="talks" className="row flex justify-content-center">
      <div className="col-lg-4 col-md-6">
        <div
          className={`card ${extend.eventCard} mt-4 mb-5`}
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/posts/ieee-iemsb_register-at-httpslnkdinech2hrzd-do-activity-7044286905034698752-3pa7?utm_source=share&utm_medium=member_android";
          }}
        >
          <img className="card-img-top" src={threeDPri} alt="CardImage" />
          <div className="card-body">
            <div className="card-text CardText text-center">
              <h1 className="h2 text-center mt-3">
                3D Printing Workshop
              </h1>
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

export default Workshops;
