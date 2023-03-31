import React from "react";
import { NavLink } from "react-router-dom";

const RegistratonDetails = () => {
  return (
    <>
      <div className="container" id="register">
        {/* <div className="row spacing"></div> */}
        <div className="row text-center">
          <NavLink id="btn-ani" to="/" target="_blank">
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            Login Here!
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default RegistratonDetails;
