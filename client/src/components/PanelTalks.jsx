import React from "react";
import extend from "../styles/Profile.module.css";
import academia from "../assets/img/academiaHarmony.jfif"
const PanelTalks = () => {
  return (
    <>
      <div id="talks" className="row flex justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div
            className={`card ${extend.eventCard} mt-4 mb-5`}
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/posts/ieee-iemsb_registration-link-elevate2023coinregister-activity-7048521965271203840-hY2X?utm_source=share&utm_medium=member_android";
            }}
          >
            <img className="card-img-top" src={academia} alt="CardImage" />
            <div className="card-body">
              <div className="card-text CardText text-center">
                <h1 className="h2 text-center mt-3">NEED OF INDUSTRY - ACADEMIA HARMONY</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PanelTalks