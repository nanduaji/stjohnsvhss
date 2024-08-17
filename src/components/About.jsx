import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>About Our Institute</h1>
        <p className={styles.aboutDescription}>
          At St.Johns VHSS Ummannoor, we are dedicated to nurturing the minds of
          tomorrow. Our mission is to provide a holistic educational experience
          that empowers students to achieve academic excellence and develop as
          well-rounded individuals. With a focus on innovation, collaboration,
          and lifelong learning, we prepare our students to succeed in an
          ever-changing world.
        </p>
        <div className={styles.teamSection}>
          <div className={styles.teamMember}>
            <img
              src="manager.jpeg"
              alt="Principal"
              className={styles.teamImage}
            />
            <h3>Mrs.Indu K Nair</h3>
            <p>Principal</p>
          </div>
          <div className={styles.teamMember}>
            <img
              src="manager.jpeg"
              alt="Academic Dean"
              className={styles.teamImage}
            />
            <h3>John Smith</h3>
            <p>Academic Dean</p>
          </div>
          <div className={styles.teamMember}>
            <img
              src="manager.jpeg"
              alt="Academic Dean"
              className={styles.teamImage}
            />
            <h3>John Smith</h3>
            <p>Academic Dean</p>
          </div>
          <div className={styles.teamMember}>
            <img
              src="manager.jpeg"
              alt="Head of Admissions"
              className={styles.teamImage}
            />
            <h3>Emily Johnson</h3>
            <p>Head of Admissions</p>
          </div>
        </div>
      </div>
      <div className={styles.aboutImageContainer}>
        <img src="office.jpg" alt="Our Campus" className={styles.aboutImage} />
      </div>
    </div>
  );
}

export default About;
