import React from "react";
import styles from "../styles/Page.module.css";

// Add interface for committee member
interface CommitteeMember {
  Name: string;
  Phone: string;
  Email: string;
  Position: string;
}

// Add interface for mayor member
interface MayorMember {
  Name: string;
  Phone: string;
  Email: string;
  Post: string;
}

// Add type for city data structure
interface CityData {
  Location: string;
  Members: MayorMember[];
}

// Add type for committee data structure
interface CommitteeData {
  "Executive Committee": CommitteeMember[];
  "Mayors Bureau": CityData[];
}

const committeeData: CommitteeData = {
  "Executive Committee": [
    { Name: "Adriel Niyodusaba", Phone: "010-9998-7109", Email: "siradriel@gmail.com", Position: "Chairperson" },
    { Name: "NDAGIJIMANA Frank Aimee Rodrigue", Phone: "010-3301-6161", Email: "rodfrank01@gmail.com", Position: "Deputy Chairperson" },
    { Name: "MURUNGI ANITA", Phone: "010-2184-6434", Email: "anitamurungi5@gmail.com", Position: "Secretary" },
    { Name: "Maronko Moise", Phone: "010-6498-2490", Email: "antonionike2007@gmail.com", Position: "Public Relations & Communication Officer" },
    { Name: "Marie Consolee DUSABINEMA", Phone: "010-9851-6967", Email: "7marieconsolee@gmail.com", Position: "Commissioner for Gender Equality" },
    { Name: "David Niyomaba", Phone: "010-9720-0902", Email: "David@paramms.com", Position: "Commissioner for counseling & career guidance" },
    {
      Name: "Jean Claude MUHIRWA RUKUNDO",
      Phone: "010-3299-772",
      Email: "badarito@gmail.com",
      Position: "Commissioner for Culture, Leisure, and Sports",
    },
    { Name: "Pamela Riziki Okyere", Phone: "010-9671-5051", Email: "eliariver@gmail.com", Position: "Auditor" },
    { Name: "UMUHOZA Redempta", Phone: "010-7463-8512", Email: "umurede92@gmail.com", Position: "Auditor" },
    { Name: "Dr. Joel NDIKUMANA", Phone: "010-9913-8172", Email: "ndikujo100@gmail.com", Position: "Advisory Board and Disciplinary Committee" },
    { Name: "MUGABE ARNAULD", Phone: "010-2090-3770", Email: "mugarnauld@gmail.com", Position: "Advisory Board and Disciplinary Committee" },
    { Name: "REGINA PACIS UWERA", Phone: "010-2180-3072", Email: "queenpacis@gmail.com", Position: "Advisory Board and Disciplinary Committee" },
  ],
  "Mayors Bureau": [
    {
      Location: "Ansan & Incheon",
      Members: [{ Name: "MUHIRE EUGENE", Phone: "010-5833-6533", Email: "muhireug@yahoo.fr", Post: "Vice Mayor" }],
    },
    {
      Location: "Busan",
      Members: [
        { Name: "UWITONZE HOSANNA", Phone: "010-7312-6930", Email: "hosanna14@gmail.com", Post: "Mayor" },
        { Name: "BYISHIMO ESPOIR", Phone: "010-7498-3809", Email: "byishimoe@gmail.com", Post: "Vice Mayor" },
      ],
    },
    {
      Location: "Daegu",
      Members: [
        { Name: "NDAYISHIMIYE ISAIE", Phone: "010-2376-5219", Email: "esaiehyb@gmail.com", Post: "Mayor" },
        { Name: "MUKARUKUNDO MIRIAM", Phone: "010-2826-8351", Email: "mumiriam1@gmail.com", Post: "Secretary" },
      ],
    },
    {
      Location: "Daejeon",
      Members: [{ Name: "HABINEZA ELIEZEL", Phone: "010-7354-3103", Email: "habineza.eliezel@gmail.com", Post: "Mayor" }],
    },
    {
      Location: "Gwangju",
      Members: [{ Name: "UMUGIRE ALPHONSE", Phone: "010-5466-1160", Email: "umugiresa@gmail.com", Post: "Mayor" }],
    },
    {
      Location: "Seoul",
      Members: [
        { Name: "Dr. MFITUMUKIZA JOSEPH", Phone: "010-3581-4424", Email: "mjosephpatient2010@gmail.com", Post: "Mayor" },
        { Name: "NISHIMWE H. LEON FIDELE", Phone: "010-5864-2618", Email: "gashalealeon@gmail.com", Post: "Vice Mayor" },
      ],
    },
    {
      Location: "Sokcho/Gangneung",
      Members: [
        { Name: "DUSENGIMANA ZEPHYLIN", Phone: "010-2832-7660", Email: "dzephylin@gmail.com", Post: "Mayor (Sokcho Area)" },
        { Name: "KARIGIRWA FLAVIA", Phone: "010-4197-1866", Email: "flaviakarigirwa@gmail.com", Post: "Vice Mayor" },
        { Name: "NDIKUMANA JEAN NEPO", Phone: "010-9998-1686", Email: "jeannepohun@gmail.com", Post: "Vice Mayor (Gangneung Area)" },
      ],
    },
    {
      Location: "Suwon",
      Members: [{ Name: "BAJENEZA VALENTIN", Phone: "010-9676-2161", Email: "bajeneza13@gmail.com", Post: "Mayor" }],
    },
  ],
};

const Committee = () => {
  const renderExecutiveMembers = () => {
    return (
      <div className={styles.tableContainer}>
        <table className={styles.executiveTable}>
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {committeeData["Executive Committee"].map((member, index) => (
              <tr key={index}>
                <td className={styles.positionCell}>{member.Position}</td>
                <td>{member.Name}</td>
                <td>{member.Phone}</td>
                <td>
                  <a href={`mailto:${member.Email}`}>{member.Email}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderMayorsBureau = () => {
    return committeeData["Mayors Bureau"].map((city, index) => (
      <div key={index} className={styles.citySection}>
        <h3 className={styles.cityTitle}>{city.Location}</h3>
        <div className={styles.cityMembers}>
          {city.Members.map((member, memberIndex) => (
            <div key={memberIndex} className={styles.memberRow}>
              <strong className={styles.position}>{member.Post}:</strong>
              <span className={styles.memberInfo}>
                {member.Name} | {member.Phone} | <a href={`mailto:${member.Email}`}>{member.Email}</a>
              </span>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Committee Members</h1>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Executive Committee</h2>
            <p>Meet our dedicated team serving the Rwandan community in South Korea.</p>
            <div className={styles.executiveCommittee}>
              <div className={styles.committeeSection}>{renderExecutiveMembers()}</div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>City Representatives</h2>
            <p>Your closest representative in your city.</p>
            <div className={styles.mayorsBureau}>{renderMayorsBureau()}</div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Committee;
