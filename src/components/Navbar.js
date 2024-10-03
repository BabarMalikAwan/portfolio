import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Babar from "../Assets/Projects/rsz_babar.png";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import styles from "./navbar.module.css"; // Import the custom stylesheet

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? styles.sticky : styles.navbar}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={Babar} alt="brand" className={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span className={styles.navbarTogglerIcon}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item className={styles.navItem}>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome className={styles.navIcon} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                <AiOutlineUser className={styles.navIcon} /> Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link as={Link} to="/service" onClick={() => updateExpanded(false)}>
                <AiOutlineUser className={styles.navIcon} /> Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen className={styles.navIcon} /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument className={styles.navIcon} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
