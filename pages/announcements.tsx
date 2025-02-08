import React from "react";
import styles from "../styles/Page.module.css";

const Announcements = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Announcements</h1>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Latest Updates</h2>
            <p>Stay tuned for upcoming events and important announcements.</p>
            {/* Add announcements list here */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Announcements;
