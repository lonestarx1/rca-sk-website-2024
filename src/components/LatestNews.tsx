import React from "react";
import styles from "../styles/Home.module.css";
import handover2 from "../@assets/handover2.jpeg";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

const LatestNews: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "RCA-SK ExecutiveCommittee Handover Ceremony",
      date: "2024-12-11",
      description:
        "The official handover ceremony was help in Seoul, in presence of The Embassy of Rwanda in South Korea, The Outgoing Committee and The Electoral Board. The new committee was sworn in and will be serving for the next 2 years.",
      imageUrl: handover2,
    },
  ];

  return (
    <div className={styles.newsSection}>
      <h2>Latest News</h2>
      <div className={styles.newsGrid}>
        {newsItems.map((item) => (
          <div key={item.id} className={styles.newsCard}>
            {item.imageUrl && <img src={item.imageUrl} alt={item.title} className={styles.newsImage} />}
            <h3>{item.title}</h3>
            <span className={styles.newsDate}>{item.date}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
