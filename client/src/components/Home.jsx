import React from "react";
import Banner from "./Banner";
import Projects from "./Projects";
import RegistratonDetails from "./RegistratonDetails";
import { Skills } from "./Skills";
import { Footer } from "./Footer";
import "../styles/home.css";
// import logo from '../images/logo.png'
import vdo from "../assets/videos/elevateVideo.m4v";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="container-fluid video-container text-center" id="home">
        <video
          src={vdo}
          alt="video"
          id="main-video"
          controls
          autoPlay
          muted
          loop
        >
          video
        </video>
      </div>
      <div className="App">
        <Banner />
        <div className="bg">
          <Projects />
          <Skills />
          <RegistratonDetails />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
