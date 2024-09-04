import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import styles from "./Projects.module.css"; // Import the generated stylesheet
import chatify from "../../Assets/Projects/chatify.png";
import emotion from "../../Assets/Projects/emotion.png";
import elitequality from "../../Assets/Projects/codeEditor.png";
import evolce from "../../Assets/Projects/blog.png";
import alvi from "../../Assets/Projects/suicide.png";
import vibes from "../../Assets/Projects/vibes.png";
import silicon from "../../Assets/Projects/leaf.png";
import note from "../../Assets/Projects/notebook.png";
function Projects() {
  return (
    <Container fluid className={styles.projectSection}>
      <Particle />
      <Container>
        <h1 className={styles.projectHeading}>
          My Recent <strong className={styles.purple}>Works</strong>
        </h1>
        <p className={styles.description}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className={styles.projectRow}>
          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Food App"
              description="A restaurant food buying application, built with React."
              ghLink="https://github.com/BabarMalikAwan/Food-App"
              demoLink="https://food-app-rho-weld.vercel.app/"
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={evolce}
              isBlog={false}
              title="Evolce Impex"
              description="A WordPress-based sportswear website, built using Elementor."
              ghLink="#"
              demoLink="https://evolceimpex.com/"
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={elitequality}
              isBlog={false}
              title="Elite Quality"
              description="A WordPress-based project for VPN site exploration."
              demoLink="https://elitequalityestimation.com/"
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={silicon}
              isBlog={false}
              title="Silicon Estimation"
              description="A WordPress project built using Elementor page builder."
              ghLink="#"
              demoLink="http://siliconestimation.com/"
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={alvi}
              isBlog={false}
              title="Alvi Sports"
              description="A WordPress-based sportswear site, built with Elementor."
              ghLink="#"
              demoLink="https://alvisports.com.pk/"
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Bigwood Sports"
              description="A WordPress-based sportswear site, built with Elementor."
              ghLink="#"
              demoLink="https://bigwoodsports.com/"
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={vibes}
              isBlog={false}
              title="Vibes Surgical"
              description="A WordPress-based Surgical Instrument site, built using Elementor."
              ghLink="#"
              demoLink="https://vibessurgical.com/"
            />
          </Col>

          <Col md={4} className={styles.projectCard}>
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Soft Notes"
              description="An online notes-keeping application, built with the MERN stack."
              ghLink="https://github.com/BabarMalikAwan/soft-notes.git"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
