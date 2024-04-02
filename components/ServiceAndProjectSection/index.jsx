import SVGImages from "assets/images/index";
import ServiceAndProjectCard from "components/ServiceAndProjectsCard/index";
import Image from "node_modules/next/image";
import Button from "node_modules/react-bootstrap/esm/Button";
import React from "react";
import styles from "styles/Components/ServiceAndProjectSection/ServiceAndProjectSection.module.scss";

const ServiceAndProjectSection = () => {
  const RandD = [
    {
      imageURl: SVGImages?.modelBased,
      title: "Model Based Development",
      url: "https://techlanz.edmingle.com/services-mbd",
      metadata:
        "Techlanz is at the forefront of Model-Based Engineering (MBE) and Model-Based Development (MBD), offering innovative services to streamline product development processes.",
    },
    {
      imageURl: SVGImages?.systemEng,
      title: "System Engineering",
      url: "https://techlanz.edmingle.com/services-system",
      metadata:
        "Techlanz is a leading provider of System Engineering solutions tailored for electric mobility systems and vehicles.",
    },
    {
      imageURl: SVGImages?.analyticsAi,
      title: "ANALYTICS & AI",
      url: "https://techlanz.edmingle.com/services-analytics",
      metadata:
        "Techlanz pioneers cutting-edge solutions in the intersection of IoT, telematics, analytics, AI, and software-defined vehicles, particularly tailored for electric mobility",
    },
  ];
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
        {RandD?.map((item, index) => {
          return (
            <div key={index}>
              <ServiceAndProjectCard
                imageURl={item?.imageURl}
                title={item.title}
                metadata={item.metadata}
                url={item.url}
              />
            </div>
          );
        })}
      </div>
      {/* 
      <div className={styles.btnContainer}>
        <Button>Explore More Services</Button>
      </div> */}
    </div>
  );
};

export default ServiceAndProjectSection;
