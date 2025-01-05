import React from "react";
import styles from "../styles/Page.module.css";

const Businesses = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Rwandan Businesses</h1>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Business Directory</h2>
            <p>Discover Rwandan-owned businesses and services in South Korea. Support our community's entrepreneurial spirit.</p>
            {/* Add business listings here */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Businesses;
