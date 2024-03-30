import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import Button from "node_modules/react-bootstrap/esm/Button";
import React from "react";
import styles from "styles/Components/WhyUsSection/WhyUsSection.module.scss";

const WhyUsSection = () => {
  return (
    <div className={styles.container}>
      <h1>Why US</h1>
      <p>Techlanz advantage</p>

      <Image
        src={SVGImages.coursesTableImage}
        alt="coursesTableImage"
        className={styles.firstImage}
      />
      <div className={styles.divided} />
      <Image
        src={SVGImages.desktopVideoImage}
        alt="desktopVideoImage"
        className={styles.secondImage}
      />

      <Button>Explore Courses</Button>
    </div>
  );
};

export default WhyUsSection;
