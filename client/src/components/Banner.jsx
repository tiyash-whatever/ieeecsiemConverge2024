import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountDown from "./CountDown";
import headerImg from "../assets/img/abc.png";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "TowardsBetterThings", "TowardsBetterThings", "TowardsBetterThings" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">About</span> */}
                <h1>{`#`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "TowardsBetterThings", "TowardsBetterThings", "TowardsBetterThings" ]'><span className="wrap">{text}</span></span></h1>
                  <p>ELEVATE '22 is the annual event of IEEE IEM Student Branch. This is the second edition, and the first edition, STACK '21, was a huge success. It saw huge participation from across India. It will have scope for both online and offline participation. Seminars, hands on workshops, numerous competitions, internship fair, all add to the highlights of ELEVATE'22. And in addition to the unique events, it creates a platform for students to interact with eminent speakers from various leading industries..</p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  <CountDown />
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Banner;