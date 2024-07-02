import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ansh Bhayana </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently employed as a content creator and social media handler at Instantbollywood.
            <br />
            I have completed bachelor’s degree in commerce at Delhi University

            <br />
            <br />
            Apart from this my skills also include 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Multi Instrumentalists
            </li>
            <li className="about-activity">
              <ImPointRight /> Videography
            </li>
            <li className="about-activity">
              <ImPointRight /> Trend knowledge
            </li>
            <li className="about-activity">
              <ImPointRight /> Creative Production
            </li>
            <li className="about-activity">
              <ImPointRight /> PR Handeling
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creativity is Intelligence Having Fun!"{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
