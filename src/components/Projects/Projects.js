import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/bloh.jpg";
import emotion from "../../Assets/Projects/emotion.jpg";
import editor from "../../Assets/Projects/editor.jpg";
import chatify from "../../Assets/Projects/chatify.jpg";
import suicide from "../../Assets/Projects/acting.jpg";
import bitsOfCode from "../../Assets/Projects/leaf.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Celebrity Interviews"
              description="Conducted over 15 celebrity interviews at Instantbollywood, including Raveena Tandon,  Shaan and many more, demonstrating strong research skills and confidence."
              igLink="https://youtu.be/rS7zCuus-p0?si=UYG6y9-94dPaAnNN"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Social Media Management"
              description="Helped Instantbollywood achieve over 100 million views across all platforms through strategic social media management and content creation."
              igLink="https://www.instagram.com/p/C5NxBohvy2c/?igsh=MXFpbXQ5d3lwaWM3aA=="
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Copywriting & Scripting"
              description="Writing plays and creating content have honed my copywriting skills, enabling me to craft engaging narratives that seamlessly integrate brands."
              igLink="https://drive.google.com/file/d/1AzLX1dU1HOSj9oXn7RqbX90megPdAq8D/view?usp=drivesdk"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Content Creation"
              description="Consistent content creation, sharp editing skills, and strong trend knowledge have resulted in many of my personal reels reaching millions of views, showcasing my ability to engage with audience and stay ahead in the digital content space."
              igLink="https://www.instagram.com/reel/C7OxrkSylmu/?igsh=djF0YmhlNDVkY3pr"
              // demoLink="https://plant49-ai.herokuapp.com/"/
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Acting"
              description="As an actor, I've portrayed lead roles in numerous digital advertisements, leveraging my performance skills to effectively communicate brand messages and connect with audiences."
              igLink="https://drive.google.com/file/d/17YEnbe6AWM7sVw3PE-4WKukg8AtXv_Z-/view?usp=drivesdks"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Leadership"
              description="Led theatre society as President, represented plays nationally, and led a team of 40+ people, honing team management and leadership skills."
              igLink="https://drive.google.com/file/d/1kR6ivbwqCLSeLkKWiu8tPc16UOfpjkyP/view?usp=drivesdk"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
