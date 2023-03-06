import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import projImg from "../assets/img/tealcard.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  // const projects = [
  //   {
  //     title: "Opening Ceremony",
  //     description: "Elevate starts with excitement",
  //     imgUrl: projImg,
  //   },
  //   {
  //     title: "Opening Ceremony",
  //     description: "Elevate starts with excitement",
  //     imgUrl: projImg,
  //   },
  //   {
  //     title: "Opening Ceremony",
  //     description: "Elevate starts with excitement",
  //     imgUrl: projImg,
  //   },
  //   {
  //     title: "Opening Ceremony",
  //     description: "Elevate starts with excitement",
  //     imgUrl: projImg,
  //   },
  // ];

  return (
    <section className="project" id="schedule">
      <Container className="project-bx wow zoomIn">
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Schedule</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">6th April</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">7th April</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">8th April</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">9th April</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {/* <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row> */}
                        {/* <div class="tl-content" style={{ top: "10%" }}>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              10:00 AM - 10:45 AM
                            </i>{" "}
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              Inauguration
                            </span>
                          </p>

                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              11:00 AM - 12:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "20px" }}>
                              Networking Session
                            </span>{" "}
                          </p>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              12:00 PM - 1:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "20px" }}>
                              Panel Discussion: Women Rights/Human Rights
                            </span>{" "}
                          </p>
                          <ul>
                            -Women entrepreneurship in the wake of economic
                            liberalisation and globalisation.
                          </ul>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              1:30 PM - 2:30 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Roadmap to DSA
                            </span>{" "}
                          </p>
                          <ul>
                            -Geeks For Geeks <br />
                            Speaker : Dr. Mousiki Kar
                          </ul>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              6:00 PM - 7:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Physical and computational modeling of smart homes
                            </span>{" "}
                          </p>
                          <ul>Speaker : Damla Turgut</ul>
                        </div> */}
                        <div>Coming Soon!</div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div>Coming Soon!</div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div>Coming Soon!</div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <div>Coming Soon!</div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="img"></img> */}
    </section>
  );
};

export default Projects;
