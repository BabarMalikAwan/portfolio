import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import styles from './home.module.css'; // Use CSS Modules for scoped styling
import myimg from "../../Assets/myimg.jpeg";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
function Home() {
  return (
    <section className={styles.homeSection}>
      <Particle />
      <Container fluid className={styles.homeContainer} id="home">
        <Container className={styles.homeContent}>
          <Row>
            <Col md={7} className={styles.homeHeader}>
              

              <h1 className={styles.introduction}>
                I'M
                <strong className={styles.name}> BABAR ALI</strong>
              </h1>

              <div className={styles.typeContainer}>
                <Type />
              </div>
            </Col>

            <Col md={5} className={styles.logoContainer}>
              <img
                src={myimg}
                alt="home pic"
                className={styles.homeLogo}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Techstack/>
      <Toolstack/>
     
    </section>
  );
}

export default Home;
