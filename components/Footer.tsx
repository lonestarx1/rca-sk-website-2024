import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p>Email: rcaskcommittee@gmail.com</p>
          <p>Phone: +82-10-9998-7109</p>
          <p>Address: Seoul, South Korea</p>
        </div>
        <div className={styles.socialLinks}>
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com/rca_skorea?igsh=MXFmOHVlOGxhY2piZg==" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
