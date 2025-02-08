import React from "react";
import styles from "../styles/Home.module.css";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
}

const UpcomingEvents: React.FC = () => {
  // This could later be fetched from an API or database
  const events: Event[] = [
    {
      id: 1,
      title: "National Heroes Day Celebration",
      date: "2025-02-22",
      time: "2:00 PM",
      location: "Daegu",
    },
    // Add more events as needed
  ];

  return (
    <div className={styles.eventsSection}>
      <h2>Upcoming Events</h2>
      <div className={styles.eventsList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.eventDate}>
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className={styles.eventDetails}>
              <h3>{event.title}</h3>
              <p>
                {event.time} - {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
