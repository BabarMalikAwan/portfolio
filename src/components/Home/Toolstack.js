import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiFirebase,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import styles from './Toolstack.module.css'; // Import CSS module

function Toolstack() {
  return (
    <Row className={styles.toolstackContainer}>
      <Col xs={4} md={2} className={styles.toolItem}>
        <SiGithub className={styles.icon} />
      </Col>
      <Col xs={4} md={2} className={styles.toolItem}>
        <SiVisualstudiocode className={styles.icon} />
      </Col>
      <Col xs={4} md={2} className={styles.toolItem}>
        <SiFirebase className={styles.icon} />
      </Col>
      <Col xs={4} md={2} className={styles.toolItem}>
        <SiVercel className={styles.icon} />
      </Col>
    </Row>
  );
}

export default Toolstack;
