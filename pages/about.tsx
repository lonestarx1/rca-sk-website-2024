import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <main className={styles.aboutMain}>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Who We Are</h2>
            <p>
              The Rwandan Community Abroad - South Korea (RCA-SK) was founded on September 22, 2010, in Seoul, South Korea, as a unifying platform for
              Rwandans living, working, or studying in South Korea. RCA-SK serves as a hub for fostering solidarity, cultural exchange, and mutual
              growth among its members while maintaining close ties to our homeland, Rwanda.
            </p>
            <p>
              Our organization operates as a private, non-profit, non-governmental association, governed by Rwandan laws and rooted in the shared
              values of unity, integrity, and service to our community.
            </p>
          </section>
          <section className={styles.section}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to create a strong, inclusive, and supportive community for Rwandans in South Korea. We aim to inspire collective efforts
              that contribute to personal growth, professional advancement, and the sustainable development of Rwanda.
            </p>
          </section>
          <section className={styles.section}>
            <h2>Our Vision</h2>
            <p>
              We envision a vibrant and empowered Rwandan community in South Korea that actively contributes to the advancement of both its members
              and the broader Rwandan diaspora.
            </p>
          </section>
          <section className={styles.section}>
            <h2>Our Objectives</h2>
            <ul>
              <li>Promoting solidarity and better communication among Rwandans living in South Korea.</li>
              <li>Preserving and celebrating Rwandan culture and values within the community.</li>
              <li>Facilitating collaboration in culture, technology, and scientific research among members and the global Rwandan diaspora.</li>
              <li>
                Supporting Rwandan students by providing resources on South Korea's education system, scholarships, and vocational training
                opportunities.
              </li>
              <li>Encouraging investment by offering information on opportunities in Rwanda to members and potential investors.</li>
              <li>Building partnerships with other Rwandan communities across Asia to foster regional solidarity and share best practices.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
