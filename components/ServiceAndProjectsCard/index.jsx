import React from "react";
import styles from "styles/Components/ServiceAndProjectCard/ServiceAndProjectCard.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "node_modules/next/image";
import SVGImages from "assets/images/index";
const ServiceAndProjectCard = ({ imageURl, title, metadata, url }) => {
  const handleRoute = () => {
    window.open(url, "_blank");
  };
  return (
    <Card className={styles.container}>
      <Image src={imageURl} alt={{ imageURl }} />
      <Card.Body>
        <p>{title}</p>
        <p className={styles.description}>{metadata}</p>
      </Card.Body>
      <div onClick={handleRoute} className={styles.btnContainer}>
        {"Discover >"}
      </div>
    </Card>
  );
};

export default ServiceAndProjectCard;
