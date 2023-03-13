import blueman from "../assets/img/blueman.jpg";
import youngwom from "../assets/img/youngwom.jpg";
import redwom from "../assets/img/redwom.jpg";
import youngman from "../assets/img/youngman.jpg";
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
              </div>
              <div
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
              </div>
              <div
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
              </div>
              <div
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
