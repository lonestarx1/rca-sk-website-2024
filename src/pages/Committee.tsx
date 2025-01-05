import React from "react";
import styles from "../styles/Page.module.css";

const Committee = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Committee Members</h1>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Executive Committee</h2>
            <p>Meet our dedicated team serving the Rwandan community in South Korea.</p>
            {/* Add committee member details here */}
          </section>
          <section className={styles.section}>
            <h2>Contact Information</h2>
            <p>Email: rcaskcommittee@gmail.com</p>
            <p>Phone: +82-10-9998-7109</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Committee;
