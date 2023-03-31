import React from "react";
import extend from "../styles/Profile.module.css";
import threeDPri from "../assets/img/3dPrintingWorkshop.jfif";
import iot from "../assets/img/iotWorkshop.jfif";
import flutter from "../assets/img/flutterWorkshop.jfif";
import embedded from "../assets/img/embeddedSystemWorkshop.jfif"

const Workshops = () => {
  return (
    <>
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
                <h1 className="h2 text-center mt-3">3D Printing Workshop</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div
            className={`card ${extend.eventCard} mt-4 mb-5`}
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/posts/ieee-iemsb_registration-link-elevate2023coinregister-activity-7045381022120636416-kKqX?utm_source=share&utm_medium=member_android";
            }}
          >
            <img className="card-img-top" src={iot} alt="CardImage" />
            <div className="card-body">
              <div className="card-text CardText text-center">
                <h1 className="h2 text-center mt-3">IOT Workshop</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div
            className={`card ${extend.eventCard} mt-4 mb-5`}
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/posts/ieee-iemsb_registration-link-elevate2023coinregister-activity-7046865496134057985-70t5?utm_source=share&utm_medium=member_android";
            }}
          >
            <img className="card-img-top" src={flutter} alt="CardImage" />
            <div className="card-body">
              <div className="card-text CardText text-center">
                <h1 className="h2 text-center mt-3">Flutter Workshop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row flex justify-content-center" id="talks">
      <div className="col-lg-4 col-md-6">
          <div
            className={`card ${extend.eventCard} mt-4 mb-5`}
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/posts/ieee-iemsb_registration-link-elevate2023coinregister-activity-7047185136362160128-w70o?utm_source=share&utm_medium=member_android";
            }}
          >
            <img className="card-img-top" src={embedded} alt="CardImage" />
            <div className="card-body">
              <div className="card-text CardText text-center">
                <h1 className="h2 text-center mt-3">Embedded Systems Workshop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshops;
