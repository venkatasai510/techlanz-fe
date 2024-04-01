import React from "react";
import styles from "styles/Components/CourseCard/courseCard.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";

const CourseCard = ({ titleOne, titleTwo, titleThree, explore }) => {
  return (
    <Card style={{ width: "291px" }} className={styles.CourseCardContainer}>
      <Image src={SVGImages.course} alt="asd" />
      <Card.Body>
        <p>{titleOne}</p>
        <p>{titleTwo}</p>
        <p>{titleThree}</p>

        <div className={styles.dateDetails}>06 months - Online</div>
        <div className={styles.dateDetails}>Starts on 12 Feb 2024</div>

        <div className={styles.amountSection}>
          <span>₹ 70000.00</span>
          <span className={styles.original}>87500.00</span>
          <Image src={SVGImages.discount} alt="discount" />
          <span className={styles.rate}>25% Discount</span>
        </div>
      </Card.Body>
      <div className={styles.buttonSection}>
        <Button className={styles.transparent} onClick={() => explore()}>Explore</Button>
        <Button className={styles.green}>Enroll Now</Button>
      </div>
    </Card>
  );
};

export default CourseCard;
