import SVGImages from "assets/images/index";
import MentorCard from "components/MentorCard/index";
import Image from "node_modules/next/image";
import React from "react";
import styles from "styles/Components/MentorSection/mentorSection.module.scss";

const MentorSection = () => {
  return (
    <section className={styles.mentors}>
      <div className={styles.heading}>
        <Image src={SVGImages.star} alt="star" />
        <h2>Our Mentors</h2>
        <Image src={SVGImages.star} alt="star" />
      </div>
      <div className={styles.heading}>
        <p>Aquire real-world skills that guarantee the growth you deserve </p>
      </div>

      <div className={styles.mentorScrollContainer}>
        <MentorCard
          photo={SVGImages?.vishal}
          name="Vishal Ahuja"
          companyName="Industry mentor & Instructor "
          companylogo={SVGImages?.logo}
          designation="Founding member Techlanz"
          experience="10+ Years Experience  
          worked with Mahindra, Veetov, Simple, IIT Delhi Alumni"
        />
        <MentorCard
          photo={SVGImages?.lokesh}
          name="Lokesh Soni"
          companyName="Industry mentor & Instructor"
          companylogo={SVGImages?.simple}
          designation="GM, Simple Energy"
          experience="10+ Years Experience  
          worked with Mahindra, ZF, Ather Simple, IIT Khragpur Alumni"
        />
        <MentorCard
          photo={SVGImages?.suresh}
          name="Suresh"
          companyName="Industry mentor & Instructor"
          companylogo={SVGImages?.reliance}
          designation="GM, Reliance"
          experience="20+ Years Experience  
          worked with Reliance, KPIT, Ola, L&T, Mahindra"
        />
        <MentorCard
          photo={SVGImages?.suraj}
          name="Suraj"
          companyName="Instructor & Solution Architect"
          companylogo={SVGImages?.decisure}
          designation="Lead, Decisure Consultancy "
          experience="5+ Years Experience  
          worked with Decisure, Felix"
        />
        <MentorCard
          photo={SVGImages?.suraj}
          name="Suraj"
          companyName="Instructor & Solution Architect"
          companylogo={SVGImages?.decisure}
          designation="Lead, Decisure Consultancy "
          experience="5+ Years Experience  
          worked with Decisure, Felix"
        />
        <MentorCard
          photo={SVGImages?.suraj}
          name="Suraj"
          companyName="Instructor & Solution Architect"
          companylogo={SVGImages?.decisure}
          designation="Lead, Decisure Consultancy "
          experience="5+ Years Experience  
          worked with Decisure, Felix"
        />
      </div>
    </section>
  );
};

export default MentorSection;
