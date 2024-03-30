import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "components/TestimonialCard/index";
import styles from "styles/Components/TestimonialSection/testimonial.module.scss";
import SVGImages from "assets/images/index";

const TestimonialSection = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.heading}>
        <h2>Testimonials</h2>
      </div>
      <div className={styles.heading}>
        <p>
          what People have to say about us, their experience & key takeaways{" "}
        </p>
      </div>

      <Slider>
        <Testimonial
          description="The Battery & BMS Master Class Bootcamp by Techlanz is a game-changer for working professionals like myself. This intensive program offers hands-on experience with actual BMS hardware, firmware development, and algorithm creation. Delving into cell fundamentals and battery construction, it provides a comprehensive understanding of battery management systems. The expertise gained here is invaluable, directly applicable to real-world projects. I highly recommend this bootcamp to anyone looking to elevate their skills in battery technology and BMS development."
          name="Rohit Pauriyal"
          personImage={SVGImages.rohit}
          designation="Lead Engineer "
          companyName="Mahindra & Mahindra"
          companyLogo={SVGImages.Mahindra}
        />

        <Testimonial
          description="Techlanz's Battery & BMS Master Class Bootcamp enhanced my expertise with hands-on training in BMS hardware, firmware, and algorithm development. Exploring cell fundamentals and battery construction was invaluable. This program equipped me to tackle real-world challenges effectively. Highly recommended for professionals seeking to excel in battery technology."
          name="Ankur Saxena"
          personImage={SVGImages.arun}
          designation="Manager"
          companyName="Maruti Suzuki"
          companyLogo={SVGImages.Maruti}
        />

        <Testimonial
          description="Techlanz's AI for Engineers program transformed my career. With expert instructors and hands-on learning, I gained practical AI skills that directly impacted my work. The program's depth and clarity made complex concepts manageable, propelling my understanding and application of AI in real-world projects. Thanks to Techlanz, I've become a more competitive professional in the rapidly evolving tech industry. I wholeheartedly recommend this program to any young engineer seeking to excel in AI."
          name="Vaibhav"
          personImage={SVGImages.vaibhav}
          designation="Engineer"
          companyName="Dell Technology"
          companyLogo={SVGImages.Dell}
        />

        <Testimonial
          description="Techlanz's Battery & BMS Master Class Bootcamp revolutionized my expertise, providing hands-on training with actual BMS hardware and firmware development. Exploring cell fundamentals and battery construction, this program equipped me with the skills to excel in algorithm development. Highly recommended for professionals seeking comprehensive knowledge and practical experience in battery technology"
          name="Govind Sharma"
          personImage={SVGImages.govind}
          designation="Associate manager"
          companyName="Hero MotoCorp"
          companyLogo={SVGImages.Hero}
        />
      </Slider>
    </section>
  );
};

export default TestimonialSection;
