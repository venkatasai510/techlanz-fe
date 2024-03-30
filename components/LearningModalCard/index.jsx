import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "styles/Components/LearningModelCard/learningModelCard.module.scss";

const LearningModelCard = ({ title, imagePath, description }) => {
  return (
    <Card className={styles.learningModelContainer}>
      <Card.Body>
        <p>{title}</p>
        <p className={styles.desc}>{description}</p>
        <Image src={imagePath} alt="" />
      </Card.Body>
    </Card>
  );
};

export default LearningModelCard;
