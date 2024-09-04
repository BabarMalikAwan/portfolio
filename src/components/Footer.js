import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./footer.module.css"; // Custom CSS module for scoped styling

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className={styles.footer}>
      <Row>
        <Col md="4" className={styles.footerCopywright}>
          <h5>Designed & Developed by Babar Ali</h5>
        </Col>
        <Col md="4" className={styles.footerCopywright}>
          <h5>Copyright © {year} </h5>
        </Col>
        <Col md="4" className={styles.footerBody}>
          <ul className={styles.footerIcons}>
            <li className={styles.socialIcons}>
              <a
                href="https://github.com/BabarMalikAwan"
                className={styles.iconLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="#"
                className={styles.iconLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/babar-ali-857aa61ba/"
                className={styles.iconLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="#"
                className={styles.iconLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
