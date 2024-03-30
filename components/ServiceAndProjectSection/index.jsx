import SVGImages from "assets/images/index";
import ServiceAndProjectCard from "components/ServiceAndProjectsCard/index";
import Image from "node_modules/next/image";
import Button from "node_modules/react-bootstrap/esm/Button";
import React from "react";
import styles from "styles/Components/ServiceAndProjectSection/ServiceAndProjectSection.module.scss";

const ServiceAndProjectSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Image src={SVGImages.star} alt="star" />
        <h2>R&D Services & Projects</h2>
        <Image src={SVGImages.star} alt="star" />
      </div>
      <div className={styles.heading}>
        <p>
          what our mentees have to say about the program, their experience & key
          takeaways
        </p>
      </div>

      <div className={styles.cardSection}>
        {Array(15)
          ?.fill(" ")
          ?.map((item, index) => {
            return (
              <div key={index}>
                <ServiceAndProjectCard />
              </div>
            );
          })}
      </div>

      <div className={styles.btnContainer}>
        <Button>Explore More Services</Button>
      </div>
    </div>
  );
};

export default ServiceAndProjectSection;
