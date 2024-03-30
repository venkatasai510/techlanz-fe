import React from "react";
import styles from "styles/Components/MentorCard/mentorCard.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "node_modules/next/image";

const MentorCard = ({
  photo,
  name,
  companyName,
  companylogo,
  designation,
  experience,
}) => {
  return (
    <Card className={styles.mentorCardContainer}>
      <div className={styles.cardBody}>
        <Image src={photo} alt="photo" />
        <p className={styles.name}>{name}</p>
        <p className={styles.companyName}>{companyName}</p>
        <Image src={companylogo} alt="companylogo" />
        <p className={styles.companyName}>{designation}</p>
        <p>{experience}</p>
      </div>
    </Card>
  );
};

export default MentorCard;
