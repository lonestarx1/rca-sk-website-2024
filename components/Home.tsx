import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import LatestNews from "./LatestNews";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src="/icon2.png"
          alt="RCA-SK Logo"
          width={200}
          height={200}
          className={styles.logo}
          priority
          quality={100}
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            height: "auto",
            maxHeight: "200px",
          }}
        />
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
