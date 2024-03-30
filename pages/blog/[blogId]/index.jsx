import Footer from "components/Footer/index";
import Topbar from "components/Topbar/index";
import React from "react";
import styles from "styles/Components/BlogDetail/blogDetail.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "components/SliderCard/index";
import Image from "node_modules/next/image";
import SVGImages from "assets/images/index";
import Button from "react-bootstrap/Button";
import BlogCard from "components/BlogCard/index";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const BlogDetails = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2.8,
    speed: 500,
    arrows: true,
    dots: false,
  };
  return (
    <div className={styles.BlogDetailsContainer}>
      <Topbar />

      <div className={styles.blogDetailsSection}>
        <div className={styles.leftContainer}></div>
        <div className={styles.rightContainer}>
          <div className={styles.relatedCouseContainer}>
            <p className={styles.cardTitle}>Related Courses</p>
            <div className={styles.topSection}>
              <p>PG Program in Artificial Intelligence & Machine Learning</p>

              <div className={styles.buttonSectionInRightContainer}>
                <Button className={styles.transparentBtn}> Explore</Button>
                <Button className={styles.colourBtn}> Enroll Now</Button>
              </div>
            </div>

            <div className={styles.bottomSection}>
              <p>PG Program in Artificial Intelligence & Machine Learning</p>
              <div className={styles.buttonSectionInRightContainer}>
                <Button className={styles.transparentBtn}> Explore</Button>
                <Button className={styles.colourBtn}> Enroll Now</Button>
              </div>
            </div>
            <Button className={styles.bigButton}>Explore All Courses</Button>
          </div>

          <div className={styles.relatedCouseContainer}>
            <p className={styles.cardTitle}>Explore Services</p>

            <div className={styles.cardContainer}>
              <BlogCard />
            </div>

            <Button className={styles.bigButton}>Explore All Services</Button>
          </div>

          <div className={styles.relatedCouseContainer}>
            <p className={styles.cardTitle}>Community Buzz</p>

            <p>
              <Image src={SVGImages.chat} alt="chat" />
              what is latest battery chemistry in the market?
            </p>
            <p>
              <Image src={SVGImages.chat} alt="chat" />
              Resolving ID, IQ Axis in motor controller design.
            </p>
            <p>
              <Image src={SVGImages.chat} alt="chat" />
              Modelling Battery Charge Cycle WRT to battery DOD.
            </p>
            <p>
              <Image src={SVGImages.chat} alt="chat" />
              Modelling Battery Charge Cycle WRT to battery DOD.
            </p>

            <Button className={`${styles.bigButtonRed}`}>
              Join the community
            </Button>
          </div>

          <div className={styles.relatedCouseContainer}>
            <p className={styles.cardTitle}>Newsletter</p>

            <InputGroup className={styles.Input}>
              <Form.Control placeholder="Enter your email to get the latest news..." />
            </InputGroup>

            <Button className={styles.bigButton}>Subscribe Now</Button>
          </div>
        </div>
      </div>

      <div
        className={`${styles.sliderContainer} ${styles.anotherSliderContainer}`}
      >
        <h2 className={styles.anotherSlider}>Media Spotlights</h2>
        <p className={styles.head}>Techlanz in News</p>
        <Slider {...settings}>
          {Array(10)
            .fill(" ")
            ?.map((item, index) => {
              return (
                <div key={index}>
                  <SliderCard showLeft={true} />
                </div>
              );
            })}
        </Slider>
        <p className={styles.bottomText}>Read More News about us </p>
      </div>
      <div className={styles.contactSection}>
        <Image src={SVGImages.contantUS} alt="/" />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
