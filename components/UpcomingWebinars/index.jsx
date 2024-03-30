import UpcomingWebinarCard from "components/UpcomingWebinarCard/index";
import React from "react";
import styles from "styles/Components/UpcomingWebinars/upcomingWebinars.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpcomingWebinars = () => {
  const settings = {
    className: "whiteBtn",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    arrows: true,
    dots: true,
  };
  return (
    <div className={styles.upcomingWebinarsContainer}>
      <h1>Upcoming Webinars</h1>
      <p>
        Don’t miss out ! Register now to secure your spot in our exciting
        webinars. Limited seats.
      </p>
      <Slider {...settings}>
        <UpcomingWebinarCard />
        <UpcomingWebinarCard />
        <UpcomingWebinarCard />
      </Slider>
    </div>
  );
};

export default UpcomingWebinars;
