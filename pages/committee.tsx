import React from "react";
import styles from "../styles/Page.module.css";

// Interfaces.
interface CommitteeMember {
  Name: string;
  Phone: string;
  Email: string;
  Position: string;
}

interface MayorMember {
  Name: string;
  Phone: string;
  Email?: string;
  Post: string;
}

interface CityData {
  Location: string;
  Members: MayorMember[];
}

interface CommitteeData {
  "Executive Committee": CommitteeMember[];
  "Mayors Bureau": CityData[];
}

const committeeData: CommitteeData = {
  "Executive Committee": [
    { Name: "Adriel NIYODUSABA", Phone: "010-9998-7109", Email: "siradriel@gmail.com", Position: "Chairperson" },
    { Name: "Frank Aimee Rodrigue NDAGIJIMANA", Phone: "010-3301-6561", Email: "rodfrank01@gmail.com", Position: "Deputy Chairperson" },
    { Name: "Mignonne Umurerwa", Phone: "010-3964-3717", Email: "mignonneumurerwa@gmail.com", Position: "Secretary" },
    { Name: "Moise MARONKO", Phone: "010-6498-2490", Email: "antonionike2007@gmail.com", Position: "Public Relations & Communication Officer" },
    { Name: "Marie Consolee DUSABINEMA", Phone: "010-9851-6967", Email: "7marieconsolee@gmail.com", Position: "Commissioner for Gender Equality" },
    { Name: "David NIYONSABA", Phone: "010-9720-0902", Email: "David@paramms.com", Position: "Commissioner for counseling & career guidance" },
    { Name: "Ntwari Thierry", Phone: "010-2972-1690", Email: "jonthierry1@gmail.com", Position: "Commissioner for Culture, Leisure, and Sports" },
    { Name: "Pamela RIZIKI OKYERE", Phone: "010-9671-5051", Email: "ellaravery@gmail.com", Position: "Auditor" },
    { Name: "Redempta UMUHOZA", Phone: "010-7463-8512", Email: "umurede92@gmail.com", Position: "Auditor" },
    { Name: "Dr. Joel NDIKUMANA", Phone: "010-9913-8172", Email: "ndikujo100@gmail.com", Position: "Advisory Board and Disciplinary Committee" },
    { Name: "Arnauld MUGABE", Phone: "010-2090-3770", Email: "mugarnauld@gmail.com", Position: "Advisory Board and Disciplinary Committee" },
    { Name: "Regina Pacis UWERA", Phone: "010-2180-3072", Email: "queenpacis@gmail.com", Position: "Advisory Board and Disciplinary Committee" },
  ],
  "Mayors Bureau": [
    {
      Location: "Seoul",
      Members: [
        { Name: "Joseph MFITUMUKIZA", Phone: "+82-10-3581-4424", Post: "Mayor" },
        { Name: "Naphtal MFITUMUKIZA", Phone: "+82-10-6772-4101", Post: "Vice Mayor"},
        { Name: "Leon Fidele NISHIMWE", Phone: "+82-10-5864-2618", Post: "Vice Mayor"},
      ],
    },
    {
      Location: "Suwon",
      Members: [
        { Name: "Adolphe NIYIGENA", Phone: "+82-10-9862-0978", Post: "Mayor" },
        { Name: "Alex", Phone: "+250-736-807-800", Post: "Vice Mayor"},
      ],
    },
    {
      Location: "Incheon",
      Members: [
        { Name: "Blaise IKUZWE", Phone: "+82-10-4672-3492", Post: "Mayor" },
        { Name: "Manasseh", Phone: "+82-10-8103-2293", Post: "Vice Mayor"},
      ],
    },
    {
      Location: "Ansan",
      Members: [
        { Name: "Jules", Phone: "+250-788-368-498", Post: "Mayor" },
        { Name: "Eric Naphtal", Phone: "+82-10-2165-0349", Post: "Vice Mayor"},
        { Name: "Dominique MUCYO", Phone: "+82-10-2185-6094", Post: "Secretary"}
      ],
    },
    {
      Location: "Daejeon",
      Members: [
        { Name: "Eliezer", Phone: "+82-10-3487-8802", Post: "Mayor" },
      ],
    },
    {
      Location: "Jeonju & Iksan",
      Members: [
        { Name: "Fabrice HIRWA", Phone: "+82-10-2801-6611", Post: "Mayor" },
      ],
    },
    {
      Location: "Daegu",
      Members: [
        { Name: "James MUGISHA", Phone: "+82-10-8074-6633", Post: "Mayor" },
        { Name: "Miriam MUKARUKUNDO", Phone: "+82-10-2826-8351", Post: "Vice Mayor"},
        { Name: "Fidele MANYONGA", Phone: "+82-10-9759-7117", Post: "Secretary"},
      ],
    },
    {
      Location: "Busan",
      Members: [
        { Name: "TWAHIRWA", Phone: "+82-10-7712-8637", Post: "Mayor" },
        { Name: "Claudia", Phone: "+250-783-835-851", Post: "Vice Mayor"},
      ],
    },
    {
      Location: "Sokcho",
      Members: [
        { Name: "Deborah UMWALI", Phone: "+82-10-6500-2044", Post: "Mayor" },
      ],
    },
  ],
};

const Committee = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Team</h1>
        <p className={styles.subtitle}>
          Meet the dedicated individuals working together to serve and strengthen the Rwandan community in South Korea.
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Executive Committee</h2>
          <div className={styles.executiveGrid}>
            {committeeData["Executive Committee"].map((member, index) => (
              <div key={index} className={styles.memberCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.memberPosition}>{member.Position}</div>
                  <div className={styles.memberName}>{member.Name}</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <span className={styles.icon}>📞</span>
                      <span>{member.Phone}</span>
                    </div>
                    <div className={styles.contactItem}>
                      <span className={styles.icon}>✉️</span>
                      <a href={`mailto:${member.Email}`}>{member.Email}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Mayors Bureau</h2>
          <div className={styles.mayorsGrid}>
            {committeeData["Mayors Bureau"].map((city, index) => (
              <div key={index} className={styles.cityCard}>
                <div className={styles.cityHeader}>
                  <span className={styles.cityIcon}>🏙️</span>
                  <span className={styles.cityName}>{city.Location}</span>
                </div>
                <div className={styles.cityMembers}>
                  {city.Members.map((member, mIndex) => (
                    <div key={mIndex} className={styles.cityMember}>
                      <div className={styles.cityMemberRole}>{member.Post}</div>
                      <div className={styles.cityMemberName}>{member.Name}</div>
                      <div className={styles.cityMemberContact}>
                        <span>📞 {member.Phone}</span>
                        {member.Email && (
                          <span>
                            ✉️ <a href={`mailto:${member.Email}`}>{member.Email}</a>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Committee;
