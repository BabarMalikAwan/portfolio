import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiWordpress
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiMysql
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import styles from './Techstack.module.css'; // Import CSS module

function Techstack() {
  return (
    <>
      <h2 className={styles.header}>TOOLS AND TECHNOLOGIES</h2>
      <Row className={styles.techstackContainer}>
        <Col xs={4} md={2} className={styles.techItem}>
          <CgCPlusPlus className={styles.icon} />
        </Col>
        <Col xs={4} md={2} className={styles.techItem}>
          <DiJavascript1 className={styles.icon} />
        </Col>
        <Col xs={4} md={2} className={styles.techItem}>
          <DiWordpress className={styles.icon} />
        </Col>
        <Col xs={4} md={2} className={styles.techItem}>
          <DiNodejs className={styles.icon} />
        </Col>
        <Col xs={4} md={2} className={styles.techItem}>
          <DiReact className={styles.icon} />
        </Col>
        <Col xs={4} md={2} className={styles.techItem}>
          <DiMongodb className={styles.icon} />
        </Col>
        <Col xs={4} md={2} className={styles.techItem}>
          <SiNextdotjs className={styles.icon} />
        </Col>
        <Col xs={4} md={2} className={styles.techItem}>
          <DiGit className={styles.icon} />
        </Col>
        <Col xs={4} md={2} className={styles.techItem}>
          <SiMysql className={styles.icon} />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
