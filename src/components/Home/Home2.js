import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I've always been drawn to the creative side, which inevitably taught me a thing or two—like how to make things pop. Who knew, right? 🤷🏻‍♂

              <br />
              <br />As a content creator, I'm fluent in the language of social media, making it a key skill in my toolkit.

              <i>
                <b className="purple">  </b>
              </i>
              <br />
              <br />
              My field of interest is connecting with the audience through my social media skills and storytelling. Turns out, talking to people online is a talent. 


              <i>
                <b className="purple"> </b> 
                {" "}
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
              When it comes to acting and anchoring, I just can't help myself—it's like a force of nature.
 <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/*  */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ansh-bhayana-418a301b1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anshbhayana/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
