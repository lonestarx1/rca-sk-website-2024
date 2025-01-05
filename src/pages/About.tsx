import React from "react";
import styles from "../styles/Page.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Our Mission</h2>
            <p>
              The Rwandan Community in South Korea (RCA-SK) serves as a bridge connecting Rwandans living, studying, and working in South Korea.
              Established in 2010, we strive to foster unity, cultural exchange, and mutual support among our members.
            </p>
          </section>
          <section className={styles.section}>
            <h2>Our Vision</h2>
            <p>
              Together, we work towards building a stronger community that promotes Rwanda's culture, facilitates networking, and supports the welfare
              of our members while contributing positively to both Rwandan and Korean societies.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
