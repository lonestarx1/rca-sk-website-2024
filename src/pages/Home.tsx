import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../@assets/icon2.png";
import LatestNews from "../components/LatestNews";
import UpcomingEvents from "../components/UpcomingEvents";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src={logo} alt="RCA-SK Logo" className={styles.logo} />
        <h1 className={styles.title}>The Rwandan Community Abroad - South Korea</h1>
        <p className={styles.description}>Together a better future</p>

        <div className={styles.contentGrid}>
          <LatestNews />
          <UpcomingEvents />
        </div>
      </main>
    </div>
  );
};

export default Home;
