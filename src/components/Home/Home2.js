import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./Home2.module.css"; // Import the generated stylesheet

function Home2() {
  return (
    <Container fluid className={styles.homeAboutSection} id="about">
      <Container className={styles.contentContainer}>
        <Row className="justify-content-center text-center">
          <Col md={8} className={styles.homeAboutDescription}>
            <h1 className={styles.header}>
              LET ME <span className={styles.purple}> INTRODUCE </span> MYSELF
            </h1>
            <p className={styles.description}>
              I’m Babar Ali, a Full Stack Developer with 3 years of experience
              in Professional Web Application development. I specialize in PHP,
              Node.js, React.js, WordPress, and more. My creative thinking
              skills and dedication to delivering high-quality work on time make
              me a valuable asset for any project. Whether you're looking for a
              full-time developer, part-time assistance, or freelance support,
              I’m here to help. Let’s collaborate and create innovative,
              self-maintaining web applications that meet your business needs.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col md={12} className={styles.homeAboutSocial}>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className={styles.purple}>connect </span>with me
            </p>
            <ul className={styles.homeAboutSocialLinks}>
              <li className={styles.socialIcons}>
                <a
                  href="https://github.com/BabarMalikAwan"
                  target="_blank"
                  rel="noopener noreferrer" // Corrected rel attribute
                  className={styles.iconColour}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href="https://twitter.com/YourTwitterHandle" // Replace with actual Twitter handle
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconColour}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/babar-ali-857aa61ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconColour}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href="https://www.instagram.com/babar112456?igsh=MWZ1dGhvdnEwZ3k1bg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconColour}
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
