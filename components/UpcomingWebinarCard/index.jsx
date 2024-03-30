import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import Button from "node_modules/react-bootstrap/esm/Button";
import React from "react";
import styles from "styles/Components/UpcomingWebinarCard/UpcomingWebinarCard.module.scss";

const UpcomingWebinarCard = () => {
  return (
    <div className={styles.UpcomingWebinarCardContainer}>
      <div className={styles.leftContainer}>
        <h1>
          Technology Trends in <span>BMS:</span>
        </h1>
        <p>Unlock the secrets that will </p>
        <p>Transform the industry</p>
        <Button>Register Now</Button>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.middleContainer}>
          <p>Join us on</p>
          <Button>12th Mar 2024</Button>
          <Button>7:30-8:30 PM</Button>
        </div>
        <div className={styles.photoSection}>
          <Image src={SVGImages.profileImage} alt="profileImage" />
          <h1>Nicolas Richard</h1>
          <h2>Director- Dukosi</h2>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinarCard;
