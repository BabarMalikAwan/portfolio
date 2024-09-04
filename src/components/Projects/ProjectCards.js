import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import styles from "./ProjectCards.module.css"; // Import the generated stylesheet

function ProjectCards(props) {
  return (
    <Card className={styles.projectCardView}>
      <Card.Img variant="top" src={props.imgPath} alt="project image" />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{props.title}</Card.Title>
        <Card.Text className={styles.cardText}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" className={styles.button}>
          <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className={styles.button}
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
