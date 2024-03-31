import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import { useRouter } from "node_modules/next/router";
import Button from "node_modules/react-bootstrap/esm/Button";
import React from "react";
import styles from "styles/Components/WhyUsSection/WhyUsSection.module.scss";

const WhyUsSection = () => {
  const router = useRouter()
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
      {/* <Image
        src={SVGImages.desktopVideoImage}
        alt="desktopVideoImage"
        className={styles.secondImage}
      /> */}

      <Button onClick={() => router.push("/courses")}>Explore Courses</Button>
    </div>
  );
};

export default WhyUsSection;
