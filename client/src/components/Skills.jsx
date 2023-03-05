import blueman from "../assets/img/blueman.jpg";
import youngwom from "../assets/img/youngwom.jpg";
import redwom from "../assets/img/redwom.jpg";
import youngman from "../assets/img/youngman.jpg";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"
import { Col, Row } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="guests">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Guests</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Row responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <Col className="item">
                                <img src={blueman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            <Col className="item">
                                <img src={youngwom} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            <Col className="item">
                                <img src={redwom} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            {/* <div className="item">
                                <img src={youngman} alt="Image" />
                                <h5>Venkatesh Banerjee</h5>
                            </div> */}
                        </Row>
                        <Row responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <Col className="item">
                                <img src={blueman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            <Col className="item">
                                <img src={youngwom} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            {/* <Col className="item">
                                <img src={redwom} alt="Image" />
                                <h5>Senjuit Khanra</h5>
                            </Col> */}
                            <Col className="item">
                                <img src={youngman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                        </Row>
                        <Row responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <Col className="item">
                                <img src={blueman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            {/* <Col className="item">
                                <img src={youngwom} alt="Image" />
                                <h5>Tiyash Mukherjee</h5>
                            </Col> */}
                            <Col className="item">
                                <img src={redwom} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            <Col className="item">
                                <img src={youngman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                        </Row>
                        <Row responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {/* <Col className="item">
                                <img src={blueman} alt="Image" />
                                <h5>Brajit Paul</h5>
                            </Col> */}
                            <Col className="item">
                                <img src={youngwom} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            <Col className="item">
                                <img src={redwom} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            <Col className="item">
                                <img src={youngman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                        </Row>
                        <Row responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <Col className="item">
                                <img src={blueman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            <Col className="item">
                                <img src={youngwom} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            <Col className="item">
                                <img src={redwom} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            {/* <Col className="item">
                                <img src={youngman} alt="Image" />
                                <h5>Venkatesh Banerjee</h5>
                            </Col> */}
                        </Row>
                        <Row responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <Col className="item">
                                <img src={blueman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            <Col className="item">
                                <img src={youngwom} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            {/* <Col className="item">
                                <img src={redwom} alt="Image" />
                                <h5>Senjuit Khanra</h5>
                            </Col> */}
                            <Col className="item">
                                <img src={youngman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                        </Row>
                        <Row responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <Col className="item">
                                <img src={blueman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            {/* <Col className="item">
                                <img src={youngwom} alt="Image" />
                                <h5>Tiyash Mukherjee</h5>
                            </Col> */}
                            <Col className="item">
                                <img src={redwom} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                            <Col className="item">
                                <img src={youngman} alt="Image" />
                                <h5>Coming Soon</h5>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
