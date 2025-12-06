import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Image
            src="/icon2.png"
            alt="RCA-SK Logo"
            width={200}
            height={200}
            className={styles.logo}
            priority
            quality={100}
          />
          <h1 className={styles.title}>The Rwandan Community Abroad - South Korea</h1>
          <p className={styles.description}>Together a better future</p>
        </div>
      </section>

      <section className={styles.communitySection}>
        <div className={styles.sectionContent}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
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
            </div>
            
            <div className={styles.missionVisionGrid}>
              <div className={`${styles.aboutCard} ${styles.missionCard}`}>
                <h2>Our Mission</h2>
                <p>
                  To create a strong, inclusive, and supportive community for Rwandans in South Korea. We aim to inspire collective efforts
                  that contribute to personal growth, professional advancement, and the sustainable development of Rwanda.
                </p>
              </div>
              <div className={`${styles.aboutCard} ${styles.visionCard}`}>
                <h2>Our Vision</h2>
                <p>
                  We envision a vibrant and empowered Rwandan community in South Korea that actively contributes to the advancement of both its members
                  and the broader Rwandan diaspora.
                </p>
              </div>
            </div>

            <div className={styles.aboutCard}>
              <h2>Our Objectives</h2>
              <ul className={styles.objectivesList}>
                <li>Promoting solidarity and better communication among Rwandans living in South Korea.</li>
                <li>Preserving and celebrating Rwandan culture and values within the community.</li>
                <li>Facilitating collaboration in culture, technology, and scientific research.</li>
                <li>Supporting Rwandan students with resources on education, scholarships, and training.</li>
                <li>Encouraging investment by offering information on opportunities in Rwanda.</li>
                <li>Building partnerships with other Rwandan communities across Asia.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
