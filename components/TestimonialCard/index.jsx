import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import React from "react";
import styles from "styles/Components/Testimonial/testimonial.module.scss";

const Testimonial = ({
  description,
  name,
  personImage,
  designation,
  companyName,
  companyLogo,
}) => {
  return (
    <div className={styles.testimonialCardContainer}>
      <Image src={SVGImages.quotes} alt="quotes" className={styles.quotes} />
      <div className={styles.content}>
        <p>{description}</p>
        <div className={styles.rightSection}>
          <Image src={personImage} alt="personImage" />
          <h5>{name}</h5>
          <p>{designation} </p>
          <p>{companyName}</p>
          <Image src={companyLogo} alt="asd" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
