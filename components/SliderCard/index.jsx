import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "styles/Components/SliderCard/sliderCard.module.scss";

const SliderCard = ({ showLeft }) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          overflow: "hidden",
          width: "382px",
          border: "none",
        }}
      >
        {showLeft ? (
          <Image src={SVGImages.truckcard} alt=" asd" />
        ) : (
          <Image src={SVGImages.car} alt=" asd" />
        )}

        <Card.Body>
          <p className={styles.detail}>
            Energy Optimisation using a whole vehicle simulation model.
          </p>
        </Card.Body>
        <div className={styles.footer}>
          {showLeft ? <p>Hindustan Times</p> : <p></p>}
          <p>26/01/2024</p>
        </div>
      </Card>
    </div>
  );
};

export default SliderCard;
