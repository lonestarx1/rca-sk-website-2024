import React from "react";
import styles from "../styles/Page.module.css";
import businessStyles from "../styles/Business.module.css";

const businesses = [
  {
    owner: "Dr.Joseph MFITUMUKIZA ",
    company: "SAFE TRAVEL MOTORS LTD ",
    phone: "(+82) 10-3581-4424 / (+250) 788-445-011",
    registered: "Registered in Rwanda",
    description: "- Korean used and new car Trading\n- Car spare parts and accessories Trading",
    notes: "10 years of experience in used car export",
  },
  {
    owner: "Dr.Joseph MFITUMUKIZA ",
    company: "TG-CAR LTD",
    phone: "(+82) 10-3581-4424 / (+250) 788-405-909",
    registered: "Registered in Rwanda",
    description: "Car Rental Business",
    notes: "We offer:\n- cars for vip cars for weeding, special events etc…\n- School buses\n- off roads cars for picnic\n- etc",
  },
  {
    owner: "Ndayambaje Jules",
    company: "ecoshipcar LTD",
    phone: "(+82) 10-7202-2900",
    registered: "Registered in Rwanda",
    description:
      "Ecoshipcar LTD is aim to Import Vehicles & spare parts from S kore to Rwanda, as well it aim to make Rwandan vehicle market more affordable with reliability and flexibility of the Services.",
    notes: "For more about Us please visit our website Ecoshipcar.com",
  },
  {
    owner: "SHAIBU EMMANUEL & NELLY MPUHWE AIMELYNE",
    company: "Elly's Fabrics",
    logo: "/ellys_fabric.jpeg",
    phone: "(+82) 10-5282-1622 / (+82) 10-3496-1394 Instagram: @ellys.fabrics",
    registered: "Not yet registered",
    description:
      "We are Elly's Fabrics currently operating in Rwanda, bringing you elegance in form of fabrics and beauty beyond the skin. These fabrics are high quality asoebi from Nigeria readily available for you to 'steal the show'. ",
    notes:
      "We would like to add that currently all inquiries and interactions with customers are made online through our instagram page. We also do pre- orders (customers can place their orders even when not available in Rwanda) and we get these orders to them. We are grateful for the opportunity to further share our business with the world and can't wait to deliver your orders.",
  },
  {
    owner: "NIYIGENA ADOLPHE",
    company: "TM MONEY GROUP LTD,(TM TRAVELS, TM MONEY TRANSFER, TM EduBridge)",
    phone: "(+82) 10-9862-0978",
    registered: "Registered in Rwanda",
    description:
      "TM MONEY GROUP Ltd is a dynamic multinational company dedicated to providing innovative financial, travel, and educational solutions. Our diverse business divisions include:\n\nTM MONEY TRANSFER – A trusted remittance service facilitating secure and efficient money transfers from across the globe to East Africa, Malawi, Zambia, South Africa, and Lesotho.\n\nTM TRAVELS – A comprehensive travel service offering affordable hotel bookings, flight reservations, and expert tour guidance to ensure seamless travel experiences.\n\nTM EDUBRIDGE – A leading consultancy that assists individuals in securing scholarships and university admissions in Korea and worldwide. We also provide high-quality language and academic training, starting with Korean, with plans to expand into other subjects.\n\nAt TM MONEY GROUP Ltd, we are committed to excellence, affordability, and customer satisfaction across all our services.",
    notes: "YOU REQUEST, WE DELIVER",
  },
  {
    owner: "Ingororano Theophile ",
    company: "ALT GROUP CO., LTD.",
    phone: "(+82) 10-8120-8573",
    registered: "Registered in Korea",
    description: "Consulting firm, Export and Import, Wholesales used cars Export. ",
    notes:
      "Greetings! \n\nOur company is committed to tackling the challenges that lie ahead. We believe in the power of collaboration and innovation to make a positive impact on the world. Let's join forces and work towards a brighter future. \n\nTogether, we can heal the world. \n \nALT Group Co., Ltd. Korea \n",
  },
  {
    owner: "HABIMANA SETH",
    company: "Inzi trust",
    phone: "(+82) 10-5733-8138",
    registered: "Registered in Rwanda",
    description: "Inzi trust is Korean used car exporter",
    notes: "",
  },
];

const Businesses = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Rwandan Businesses</h1>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Business Directory</h2>
            <p className={businessStyles.intro}>
              Discover Rwandan-owned businesses and services in South Korea. Support our community's entrepreneurial spirit.
            </p>
            <div className={businessStyles.grid}>
              {businesses.map((business, index) => (
                <div key={index} className={businessStyles.card}>
                  <h3>{business.company}</h3>
                  <div className={businessStyles.owner}>
                    <strong>Owner:</strong> {business.owner}
                  </div>
                  <div className={businessStyles.registration}>
                    <span className={business.registered.toLowerCase().includes("not yet") ? businessStyles.unregistered : businessStyles.registered}>
                      {business.registered}
                    </span>
                  </div>
                  {business.logo && (
                    <div className={businessStyles.logoContainer}>
                      <img src={business.logo} alt={`${business.company} logo`} className={businessStyles.logo} />
                    </div>
                  )}
                  <div className={businessStyles.description}>{business.description}</div>
                  <div className={businessStyles.contact}>
                    <strong>Contact:</strong>
                    {business.phone.includes("Instagram") ? (
                      <div>
                        <div>
                          <a href={`tel:${business.phone.split("/")[0].trim()}`}>{business.phone.split("Instagram")[0]}</a>
                        </div>
                        <div>
                          <a href="https://www.instagram.com/ellys.fabrics" target="_blank" rel="noopener noreferrer">
                            Instagram: @ellys.fabrics
                          </a>
                        </div>
                      </div>
                    ) : (
                      <a href={`tel:${business.phone.split("/")[0].trim()}`}>{business.phone}</a>
                    )}
                  </div>
                  {business.notes && (
                    <div className={businessStyles.notes}>
                      <strong>Additional Info:</strong>
                      <p>{business.notes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Businesses;
