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
                        <div class="tl-content" style={{ top: "10%" }}>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              04:30 PM - 05:30 PM
                            </i>{" "}
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              Inauguration
                            </span>
                          </p>

                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              05:30 PM - 06:30 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "20px" }}>
                              Orientation {"(Rules)"}
                            </span>{" "}
                          </p>
                          {/* <p>
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
                          <ul>Speaker : Damla Turgut</ul> */}
                        </div>
                        {/* <div>Coming Soon!</div> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div class="tl-content" style={{ top: "10%" }}>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              10:00 AM - 10:15 AM
                            </i>{" "}
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              Day briefing
                            </span>
                          </p>

                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              10:15 AM - 11:15 AM
                            </i>{" "}
                            <span style={{ paddingLeft: "20px" }}>
                              Seminar: Arijit Hazra
                            </span>{" "}
                          </p>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              11:30 AM - 1:30 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "20px" }}>
                              Workshop - 3D printing {"(TAL)"} / Coding club{" "}
                              {"( app dev)"}
                            </span>{" "}
                          </p>
                          {/* <ul>
                            -Women entrepreneurship in the wake of economic
                            liberalisation and globalisation.
                          </ul> */}
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              1:30 PM - 2:30 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Lunch break
                            </span>{" "}
                          </p>
                          {/* <ul>
                            -Geeks For Geeks <br />
                            Speaker : Dr. Mousiki Kar
                          </ul> */}
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              3:00 PM - 4:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Panel talk
                            </span>{" "}
                          </p>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              4:30 PM - 6:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Competition - Ideathon
                            </span>{" "}
                          </p>
                          {/* <ul>Speaker : Damla Turgut</ul> */}
                        </div>
                        {/* <div>Coming Soon!</div> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div class="tl-content" style={{ top: "10%" }}>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              10:00 AM - 10:15 AM
                            </i>{" "}
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              Day briefing
                            </span>
                          </p>

                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              10:15 AM - 12:15 AM
                            </i>{" "}
                            <span style={{ paddingLeft: "20px" }}>
                              Workshop - IoT {"(TAL)"}
                            </span>{" "}
                          </p>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              12:30 PM - 1:30 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "20px" }}>
                              Seminar: Subodh Gajare
                            </span>{" "}
                          </p>
                          {/* <ul>
                            -Women entrepreneurship in the wake of economic
                            liberalisation and globalisation.
                          </ul> */}
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              1:30 PM - 2:30 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Lunch break
                            </span>{" "}
                          </p>
                          {/* <ul>
                            -Geeks For Geeks <br />
                            Speaker : Dr. Mousiki Kar
                          </ul> */}
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              2:30 PM - 3:30 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Seminar: Shivam Avilash
                            </span>{" "}
                          </p>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              3:30 PM - 5:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Competition
                            </span>{" "}
                          </p>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              5:00 PM - 6:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Seminar: Indrajit Lahiri
                            </span>{" "}
                          </p>
                          {/* <ul>Speaker : Damla Turgut</ul> */}
                        </div>
                        {/* <div>Coming Soon!</div> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <div class="tl-content" style={{ top: "10%" }}>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              10:00 AM - 10:15 AM
                            </i>{" "}
                            <span
                              style={{ paddingLeft: "20px", fontStyle: "bold" }}
                            >
                              Day briefing
                            </span>
                          </p>

                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              10:15 AM - 11:15 AM
                            </i>{" "}
                            <span style={{ paddingLeft: "20px" }}>Seminar</span>{" "}
                          </p>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              11:30 AM - 1:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "20px" }}>
                              Competition: Blind coding
                            </span>{" "}
                          </p>
                          {/* <ul>
                            -Women entrepreneurship in the wake of economic
                            liberalisation and globalisation.
                          </ul> */}
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              1:00 PM - 2:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Lunch break
                            </span>{" "}
                          </p>
                          {/* <ul>
                            -Geeks For Geeks <br />
                            Speaker : Dr. Mousiki Kar
                          </ul> */}
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              2:00 PM - 3:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Point Bidding + Prize Distribution
                            </span>{" "}
                          </p>
                          <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              3:30 PM - 6:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Cultural
                            </span>{" "}
                          </p>
                          {/* <p>
                            <i class="fa fa-clock-o" style={{ color: "white" }}>
                              5:00 PM - 6:00 PM
                            </i>{" "}
                            <span style={{ paddingLeft: "40px" }}>
                              Seminar: Indrajit Lahiri
                            </span>{" "}
                          </p> */}
                          {/* <ul>Speaker : Damla Turgut</ul> */}
                        </div>
                        {/* <div>Coming Soon!</div> */}
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
