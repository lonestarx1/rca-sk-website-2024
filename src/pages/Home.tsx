import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../@assets/icon2.png";
const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src={logo} alt="RCA-SK Logo" className={styles.logo} />
        <h1 className={styles.title}>The Rwandan Community Abroad - South Korea</h1>

        <p className={styles.description}>Together a better future</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Latest News</h2>
            <p>Stay updated with our community's latest events and announcements.</p>
          </div>

          <div className={styles.card}>
            <h2>Upcoming Events</h2>
            <p>Check out our calendar for upcoming community gatherings.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
