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
          <a 
            href="https://x.com/InRwandan?t=sDncp-E4hYYTHlmCOxYfsQ&s=08" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
             <span>✖️</span> X
          </a>
        </div>

        <div className={`${styles.column} ${styles.usefulLinks}`}>
          <h3>Useful Links</h3>
          <a 
            href="https://www.rwandainkorea.gov.rw/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
             <span>🇷🇼</span> Embassy Website
          </a>
          <a 
            href="https://forms.gle/aRmvETMJJNsS6jpz9" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
             <span>📦</span> Document Delivery
          </a>
          <a 
            href="https://forms.gle/WVdPfSTsG8cMyN4H6" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
             <span>📝</span> Submit a Claim
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Rwandan Community Abroad - South Korea. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
