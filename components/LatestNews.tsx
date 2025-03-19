import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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
      title: "National Heroes Day Celebration",
      date: "2025-02-22",
      description:
        "The Rwandan community in Korea celebrated National Heroes Day on February 22, 2025. The event was held in Daegu, with The Ambassador of Rwanda in South Korea as the main guest of honor.",
      imageUrl: "/heroes2025.jpg",
    },
    {
      id: 2,
      title: "RCA-SK Executive Committee Handover Ceremony",
      date: "2024-12-11",
      description:
        "The official handover ceremony was help in Seoul, in presence of The Embassy of Rwanda in South Korea, The Outgoing Committee and The Electoral Board. The new committee was sworn in and will be serving for the next 2 years.",
      imageUrl: "/handover2.jpeg",
    },
  ];

  return (
    <div className={styles.newsSection}>
      <h2>Latest News</h2>
      <div className={styles.newsGrid}>
        {newsItems.map((item) => (
          <div key={item.id} className={styles.newsCard}>
            {item.imageUrl && <Image src={item.imageUrl} alt={item.title} width={400} height={300} className={styles.newsImage} />}
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
