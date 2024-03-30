import React from "react";
import styles from "styles/Components/ServiceAndProjectCard/ServiceAndProjectCard.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "node_modules/next/image";
import SVGImages from "assets/images/index";

const ServiceAndProjectCard = () => {
  return (
    <Card className={styles.container}>
      <Image src={SVGImages.project} alt="project" />
      <Card.Body>
        <p>Embedded Electronics</p>
        <p className={styles.description}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </Card.Body>
      <div className={styles.btnContainer}>{"Discover >"}</div>
    </Card>
  );
};

export default ServiceAndProjectCard;
