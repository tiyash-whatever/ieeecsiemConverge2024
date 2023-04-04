import React from "react";
import { NavLink } from "react-router-dom";

const RegistratonDetails = () => {
  return (
    <>
      <div className="container" id="register">
        {/* <div className="row spacing"></div> */}
        <div className="row text-center" id="reg-btn">
          <NavLink id="btn-ani" to="/home" >
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            Registration Closed!
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default RegistratonDetails;
