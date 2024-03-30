import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styless from "styles/Components/WhatPeopleThinkSection/WhatPeopleThinkSection.module.scss";

const WhatPeopleThinkSection = () => {
  const settingsMainSlider = {
    className: "googleImageSlider",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.8,
    arrows: true,
    dots: false,
  };
  return (
    <div className={styless.container}>
      <div className={styless.heading}>
        <h1>What People Think </h1>
        <p>
          Over 1000+ our alumni from 100+ companies & 50+ colleges working in
          top companies
        </p>
      </div>

      {/* <div className={styless.googleContainer}>
        <Image src={SVGImages.google} alt="google" />
        <div>
          <p>Google Rating</p>
          <span>
            4.5{" "}
            <span>
              <Image src={SVGImages.ratingFullStar} alt="ratingFullStar" />
              <Image src={SVGImages.ratingFullStar} alt="ratingFullStar" />
              <Image src={SVGImages.ratingFullStar} alt="ratingFullStar" />
              <Image src={SVGImages.ratingFullStar} alt="ratingFullStar" />
              <Image src={SVGImages.ratingFullStar} alt="ratingFullStar" />
            </span>
          </span>
        </div>
      </div> */}

      <Slider {...settingsMainSlider}>
        {Array(6)
          ?.fill(" ")
          ?.map((_, index) => {
            return (
              <Image
                key={index}
                src={SVGImages.whatPeopleThinkCard}
                alt="asd"
                styles={{ width: "298px" }}
              />
            );
          })}
      </Slider>
    </div>
  );
};

export default WhatPeopleThinkSection;
