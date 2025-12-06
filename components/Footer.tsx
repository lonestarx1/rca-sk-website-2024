import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.column} ${styles.contactInfo}`}>
          <h3>Contact Us</h3>
          <p>
             <span>📧</span> rcaskcommittee@gmail.com
          </p>
          <p>
            <span>📞</span> +82-10-9998-7109
          </p>
          <p>
            <span>📍</span> Seoul, South Korea
          </p>
        </div>
        
        <div className={`${styles.column} ${styles.socialLinks}`}>
          <h3>Follow Us</h3>
          <a 
            href="https://www.instagram.com/rca_skorea?igsh=MXFmOHVlOGxhY2piZg==" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
             <span>📸</span> Instagram
          </a>
          {/* Add more social links here if needed */}
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Rwandan Community Abroad - South Korea. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
