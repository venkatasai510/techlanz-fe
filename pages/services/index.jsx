import SVGImages from "assets/images/index";
import Button from "react-bootstrap/Button";
import Topbar from "components/Topbar/index";
import Image from "node_modules/next/image";
import styles from "styles/Components/Services/services.module.scss";
import OfferingsCard from "components/OfferingsCard/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "components/SliderCard/index.jsx";
import AccordianComponent from "components/AccordianComponent/index";
import Footer from "components/Footer/index.jsx";

const Services = () => {
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
      <div className={styles.heroSection}>
        {" "}
        <Image src={SVGImages?.heroSection} alt="heroSection" />
      </div>

      <div className={styles.contentSection}>
        <div className={styles.leftSection}>
          <div className={styles.ourServicesContainer}>
            <p>Our Services</p>

            <div className={styles.buttonSection}>
              {[
                "Embedded Electronics",
                "Model Based Developement",
                "Vehicle & System Integration",
                "Vehicle & System Integration",
                "Vehicle Testing & Developement",
                "Market Research",
              ]?.map((item, index) => {
                return (
                  <div
                    className={`${styles.individualButton} ${
                      index === 0 ? styles.selected : ""
                    }`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.ourServicesContainer}>
            <p>Connect</p>

            <div className={styles.buttonSection}>
              <span>
                If you have any query about our services, Please Connect wit us.{" "}
              </span>
              <div className={styles.contact}>
                <Image src={SVGImages.phone} alt="Phone" />
                +91 1234567890
              </div>
              <div className={styles.contact}>
                <Image src={SVGImages.message} alt="email" />
                contact@techlanz.com
              </div>
              <div className={styles.contact}>
                <Image src={SVGImages.location} alt="location" />
                B-123 , Banglore, India 200012
              </div>
              <Button variant="success" className={styles.contactUs}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.descHeading}>Embedded Electronics</div>
          <div className={styles.desc}>
            <p>
              From parallel and series hybrid, to range-extended and full BEV,
              as well as fuel cell powertrains. And we have a proven process to
              understand how cells, modules and battery packs perform at every
              stage of their lifecycle. With detailed modelling of age and
              health over temperature to help you choose the right technology.
              You might be an established Tier-1 or OEM looking for support in
              optimising pack design and performance, or a single element. Or a
              start-up requiring full-scale design and development support, or
              initial pack samples to get your project moving. Whatever your
              needs, we’ll work with you to understand your battery
              requirements. Identify the right cells. Design to your specific
              targets in terms of power, durability and performance. And even
              help you source or build your packs. In short, our flexible
              approach and high levels of engineering expertise will deliver the
              right results.
            </p>
          </div>
          <div className={styles.descHeading}>
            {" "}
            {/* <Image src={SVGImages.setting} alt="/" /> */}
            Our Offerings
          </div>
          <div className={styles.cardSection}>
            {Array(5)
              .fill(" ")
              ?.map((item) => {
                return <OfferingsCard />;
              })}
          </div>
          <div className={styles.buttonContainer}>
            <Button variant="success" className={styles.contactUs}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <h2>Case Studies</h2>
        <Slider {...settings}>
          <div>
            <SliderCard />
          </div>
          <div>
            <SliderCard />
          </div>
          <div>
            <SliderCard />
          </div>
          <div>
            <SliderCard />
          </div>
          <div>
            <SliderCard />
          </div>
          <div>
            <SliderCard />
          </div>
        </Slider>
        <p className={styles.bottomText}>View all case studies</p>
      </div>

      <div
        className={`${styles.sliderContainer} ${styles.anotherSliderContainer}`}
      >
        <h2 className={styles.anotherSlider}>Media Spotlights</h2>
        <p className={styles.head}>Techlanz in News</p>
        <Slider {...settings}>
          <div>
            <SliderCard showLeft={true} />
          </div>
          <div>
            <SliderCard showLeft={true} />
          </div>
          <div>
            <SliderCard showLeft={true} />
          </div>
          <div>
            <SliderCard showLeft={true} />
          </div>
          <div>
            <SliderCard showLeft={true} />
          </div>
          <div>
            <SliderCard showLeft={true} />
          </div>
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
    </div>
  );
};

export default Services;
