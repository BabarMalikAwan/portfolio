import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from './contact.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section className={styles.contactSection}>
      <Container>
        <div className={styles.contactHeader}>
          <h1>Contact Me</h1>
        </div>
        <Row className={styles.contactDetails}>
          <Col md={4} className={styles.info}>
            <FaMapMarkerAlt className={styles.icons} />
            <h2>Address</h2>
            <p>Sialkot, Pakistan</p>
          </Col>
          <Col md={4} className={styles.info}>
            <FaPhoneAlt className={styles.icons} />
            <h2>Contact Number</h2>
            <p>+923012423111</p>
          </Col>
          <Col md={4} className={styles.info}>
            <FaEnvelope className={styles.icons}/>
            <h2>Email</h2>
            <p>ba2497195@gmail.com</p>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12} className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348665.7608735737!2d73.30084257934714!3d32.49499432669972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391d9d7dd430e0b5%3A0x238eb3b10f7a5f88!2sSialkot%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1633395443481!5m2!1sen!2sus"
              title="Google Maps"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
          <Col md={6} xs={12} className={styles.formContainer}>
            <div className={styles.contactForm}>
              <h2>Get in Touch</h2>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea rows="5" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </Col>
        </Row>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </Container>
    </section>
  );
}

export default Contact;

