import Button from "node_modules/react-bootstrap/esm/Button";
import React from "react";
import styles from "styles/Components/TopCompaniesToHireSection/topCompaniesToHireSection.module.scss";

const TopCompaniesToHireSection = () => {
  return (
    <div className={styles.TopCompaniesToHireSectionContainer}>
      <div className={styles.content}>
        <h2>Top Comapies Hire</h2>
        <h2>Techlanz Learners</h2>
        <p>Become a partner and be first in line to pick the amazing</p>
        <p>talent that graduates from our cohorts</p>

        <Button>Partner with us</Button>
      </div>
    </div>
  );
};

export default TopCompaniesToHireSection;
