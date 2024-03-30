import SVGImages from "assets/images/index";
import BookCall from "components/BookCall/index";
import Footer from "components/Footer/index";
import LandingpageSliderCard from "components/LandingPageSliderCard/index";
import Topbar from "components/Topbar/index";
import Button from "node_modules/react-bootstrap/esm/Button";
import React from "react";
import styles from "styles/Components/Courses/courses.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "components/SliderCard/index";
import AccordianComponent from "components/AccordianComponent/index";
import Image from "node_modules/next/image";
import TestimonialSection from "components/TestimonialSection/index";
import MentorSection from "components/MentorSection/index";

const Courses = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2.8,
    speed: 500,
    arrows: true,
    dots: true,
  };
  return (
    <div>
      <Topbar />
      <TestimonialSection />
      <MentorSection />

      <LandingpageSliderCard
        title={
          <div>
            <h2 className={styles.cardTitle}>JOIN WORLD’S LARGEST</h2>
            <h2 style={{ color: "#FF0000" }}>ELECTRIC VEHICLE ENGINEERING</h2>
            <h2>COMMUNITY</h2>
          </div>
        }
        description={
          "Discuss the Ideas with people around the world & find answers to your most complex problems!"
        }
        button={<Button className="redButton">Join the Community</Button>}
        image={SVGImages?.frame}
      />

      <BookCall />

      <div className={styles.freqQues}>
        <h2>Frequently Asked questions</h2>
        <p>We have answered some of the frequent questions for you!</p>

        <div className={styles.accordianContainer}>
          {[
            "Who should use the app?",
            "What is included with my subscription?",
            "How do I get paid?",
            "Is my personal information safe?",
            "How can we get in touch?",
            "How can we get in touch?",
          ]?.map((item, index) => {
            return (
              <div key={index} className={styles.accor}>
                <AccordianComponent title={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.contactSection}>
        <Image src={SVGImages.contantUS} alt="/" />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
