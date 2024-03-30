import Footer from "components/Footer/index";
import Topbar from "components/Topbar/index";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "styles/Components/LandingPage/landingPage.module.scss";
import SliderCard from "components/SliderCard/index";
import SVGImages from "assets/images/index";
import AccordianComponent from "components/AccordianComponent/index";
import LandingpageSliderCard from "components/LandingPageSliderCard/index";
import Button from "node_modules/react-bootstrap/esm/Button";
import BookCall from "components/BookCall/index";
import CourseCard from "components/CourseCard/index";
import LearningModelCard from "components/LearningModalCard/index";
import Testimonial from "components/TestimonialCard/index";
import TestimonialSection from "components/TestimonialSection/index";
import MentorSection from "components/MentorSection/index";
import TopCompaniesToHireSection from "components/TopCompaniesToHireSection/index";
import UpcomingWebinars from "components/UpcomingWebinars/index";
import ServiceAndProjectSection from "components/ServiceAndProjectSection/index";
import WhyUsSection from "components/WhyUsSection/index";
import WhatPeopleThinkSection from "components/WhatPeopleThinkSection/index";

export default function Home() {
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
  const settingsMainSlider = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    arrows: true,
    dots: true,
  };
  return (
    <>
      <Topbar />

      <Slider {...settingsMainSlider}>
        <LandingpageSliderCard
          showTopBar={true}
          title={
            <div>
              <h2 className={styles.cardTitle}>
                Don't chase Jobs, Let's Jobs Chase you! with the help of our
              </h2>
              <h2 style={{ color: "#19aea5" }}>Training Programs</h2>
            </div>
          }
          description={
            "Specialization courses to build expertise in Electric Vehicle from Hardware and Software to complete product development"
          }
          button={
            <Button className="greenButton">
              Explore Courses
              {/* <Image src={SVGImages.linkArrowRight} alt="RightArrow" /> */}
            </Button>
          }
          image={SVGImages?.videoCard}
        />

        <LandingpageSliderCard
          title={
            <div>
              <h2 className={styles.cardTitle}>
                Everything you need from Product conceptualisation to Making
              </h2>
              <h2 style={{ color: "#19aea5" }}>Real Product</h2>
            </div>
          }
          description={
            "We excel in providing world class services ranging from market research, product planning, simulations to Hardware & Software Development!"
          }
          button={<Button className="greenButton">Explore Courses</Button>}
          image={SVGImages?.electricCar}
        />

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
      </Slider>

      <BookCall />

      <section className={styles.partners}>
        <h2>PARTNERS </h2>

        <div className={styles.imageSection}>
          <Image src={SVGImages.nbt} alt="nbt" />
          <Image src={SVGImages.matel} alt="matel" />
          <Image src={SVGImages.st} alt="st" />
          <Image src={SVGImages.awards} alt="awards" />
          <Image src={SVGImages.awardsUlra} alt="awardsUlra" />
        </div>
      </section>

      <section className={styles.coursesAndProg}>
        <div className={styles.heading}>
          <Image src={SVGImages.star} alt="star" />
          <h2>COURSES & PROGRAMS</h2>
          <Image src={SVGImages.star} alt="star" />
        </div>
        <div className={styles.heading}>
          <p>Aquire real-world skills that guarantee the growth you deserve </p>
        </div>

        <div className={styles.content}>
          <div className={styles?.leftSection}>
            <div className={styles?.tabSection}>
              <p>Choose Your Domain</p>
            </div>

            {[
              "Popular Courses",
              "Electric Vehical",
              "Ai For EV",
              "Software For EV",
              "New Product Developement",
            ]?.map((item, index) => {
              return (
                <div
                  className={`${styles.tabButton} ${
                    index === 0 ? styles.selected : ""
                  }`}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className={styles?.rightSection}>
            <div className={styles?.topTabSection}>
              <span className={styles.active}>Live</span>
              <span>Recorded</span>
              <span>Corporate </span>
              <span>Free</span>
            </div>

            <div className={styles.cardPage}>
              {Array(4)
                .fill(" ")
                ?.map((item, index) => {
                  return (
                    <CourseCard
                      titleOne={"Battery + BMS BootCamp  "}
                      titleTwo={"Learn to build a complete"}
                      titleThree={"Battery + BMS from Scratch"}
                    />
                  );
                })}
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.BlackButton}>
                Explore More Courses
                {/* <Image src={SVGImages.linkArrowRight} alt="asd" /> */}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.LearningModel}>
        <div className={styles.heading}>
          <h2>Learning Model</h2>
        </div>
        <div className={styles.heading}>
          <p>A 3 Stage Learning Process to make you invincible! </p>
        </div>
        <p>Become the master of the subject via 3-Stage approach</p>
        <div className={styles.LearningModelCardSection}>
          <LearningModelCard
            title="Learn"
            imagePath={SVGImages.learnImg}
            description="Learn from the industry experts in live sessions and with relevant course material"
          />
          <LearningModelCard
            title="Practice"
            imagePath={SVGImages.bro}
            description="Practice on real hardware to hone your hardware & Software skills"
          />
          <LearningModelCard
            title="Resolve"
            imagePath={SVGImages.pana}
            description="After practicing, Resolve your queries in the live sessions and get solution to your real problems by real people"
          />
        </div>
      </section>

      <TestimonialSection />

      <MentorSection />

      <TopCompaniesToHireSection />

      <UpcomingWebinars />

      <ServiceAndProjectSection />

      <WhyUsSection />

      <WhatPeopleThinkSection />

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
    </>
  );
}
