import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import blueman from "../assets/img/blueman.jpg";
import youngwom from "../assets/img/youngwom.jpg";
import redwom from "../assets/img/redwom.jpg";
import youngman from "../assets/img/youngman.jpg";
import foodka from "../assets/img/guests/Indrajit Lahiri.jpeg";
import subodh from "../assets/img/guests/Subodh Gajare.jpeg";
import arijit from "../assets/img/guests/Arijit Hajra.jpeg";
import shivam from "../assets/img/guests/Shivam Abhilash.jpeg";
import dbd from "../assets/img/guests/Deeptendu Bikash Dhar 2023.jpg";
import skp from "../assets/img/guests/Susanta Kumar Parui.jpg";
import sc from "../assets/img/guests/Sandip Chakraborty.jpg";
import ap from "../assets/img/guests/Arpan Pal.jpg";
import td from "../assets/img/guests/Tathagata Das.jpg";
// import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"
import { Col, Row } from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skill" id="guests">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Guests</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
              <div
                // responsive={responsive}
                className="owl-carousel owl-theme skill-slider row"
              >
                <h3 className="h3 text-left">
                  <FontAwesomeIcon icon={faSquare} /> Seminar
                </h3>
                <div className="item col-md-3">
                  <img src={foodka} alt="guest" />
                  <h4 className="h5">Indrajit Lahiri</h4>
                  <h5>aka Foodka</h5>
                </div>
                <div className="item col-md-3">
                  <img src={subodh} alt="guest" />
                  <h4 className="h5">Subodh Gajare</h4>
                  <h5>Principal Architect, Cisco R&D Blore</h5>
                </div>
                <div className="item col-md-3">
                  <img src={arijit} alt="guest" />
                  <h4 className="h5">Arijit Hajra</h4>
                  <h5>CEO, Think Again Lab</h5>
                </div>
                <div className="item col-md-3">
                  <img src={shivam} alt="guest" />
                  <h4 className="h5">Shivam Abhilash</h4>
                  <h5>Engineering Specialist, ZS Associates</h5>
                  <h5>Chair, Students & YP, IEEE CS MGAB</h5>
                </div>
              </div>
              <div
                // responsive={responsive}
                className="owl-carousel owl-theme skill-slider row"
              >
                <h3 className="h3 text-left">
                  <FontAwesomeIcon icon={faSquare} /> Panel Discussion
                </h3>
                <div className="item col-md-3">
                  <img src={td} alt="guest" />
                  <h4 className="h5">Tathagata Das</h4>
                  <h5>
                    Distinguished Member of Technical Staff Alumnus Software
                  </h5>
                </div>
                <div className="item col-md-3">
                  <img src={dbd} alt="guest" />
                  <h4 className="h5">Deeptendu Bikash Dhar</h4>
                  <h5>
                    Distinguished Member of Technical Staff Alumnus Software
                  </h5>
                </div>
                <div className="item col-md-3">
                  <img src={skp} alt="guest" />
                  <h4 className="h5">Susanta Kumar Parui</h4>
                  <h5>Professor, Dept ECE, IIEST Shibpur</h5>
                </div>
                <div className="item col-md-3">
                  <img src={sc} alt="guest" />
                  <h4 className="h5">Sandip Chakraborty</h4>
                  <h5>Associate Professor, Dept CSE, IIT-KGP</h5>
                </div>
                
              </div>
              <div
                // responsive={responsive}
                className="owl-carousel owl-theme skill-slider row flex justify-content-center"
              >
                <div className="item col-md-3">
                  <img src={ap} alt="guest" />
                  <h4 className="h5">Arpan Pal</h4>
                  <h5>
                    Distinguished Chief Scientist, Embedded Systems, TCS R&D
                  </h5>
                </div>
              </div>
              {/* <div
                // responsive={responsive}
                className="owl-carousel owl-theme skill-slider row"
              >
                <div className="item col-md-4">
                  <img src={blueman} alt="guest" />
                  <h5>Coming Soon</h5>
                </div>
                <div className="item col-md-4">
                  <img src={youngwom} alt="guest" />
                  <h5>Coming Soon</h5>
                </div>
                <div className="item col-md-4">
                  <img src={redwom} alt="guest" />
                  <h5>Coming Soon</h5>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
