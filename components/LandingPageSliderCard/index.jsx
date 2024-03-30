import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import React from "react";
import styles from "styles/Components/LandingPageSliderCard/landingpageSliderCard.module.scss";

const LandingpageSliderCard = ({
  showTopBar,
  title,
  description,
  button,
  image,
}) => {
  return (
    <div className={styles.landingPageSliderCardContainer}>
      <div className={styles.leftSection}>
        {showTopBar ? (
          <div className={styles.heading}>
            <span className={styles.topHeading}>
              <span className={styles.head}>126%</span> Avg.CTC Hike{" "}
              <span className={styles.head}>Top 1%</span> Industry Instructors
            </span>
          </div>
        ) : (
          ""
        )}

        {title}
        <p>{description}</p>
        {button}
      </div>
      <div className={styles.rightSection}>
        <Image src={image} alt="" />
      </div>
    </div>
  );
};

export default LandingpageSliderCard;
