import SVGImages from "assets/images/index";
import BlogCard from "components/BlogCard/index";
import Footer from "components/Footer/index";
import Topbar from "components/Topbar/index";
import Image from "node_modules/next/image";
import React from "react";
import styles from "styles/Components/Blog/blog.module.scss";

const Blog = () => {
  return (
    <div>
      <Topbar />
      <div className={styles.heroSection}>
        <Image src={SVGImages.blogHeroSection} alt="hero" />
      </div>
      <div className={styles.blogContainer}>
        <div className={styles.pageHeading}>
          <h2>Categories</h2>
          <div className={styles.navigationBtn}>
            <Image src={SVGImages.leftArrow} alt="leftArrow" />
            <Image src={SVGImages.RightArrow} alt="RightArrow" />
          </div>
        </div>

        <div className={styles.buttonSection}>
          {[
            "All",
            "Civil",
            "CSE",
            "Telecom",
            "Machenical",
            "Biomedical",
            "Electrical",
          ]?.map((item, index) => {
            return (
              <div
                className={`${styles.tab} ${
                  index === 0 ? styles.selected : ""
                }`}
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>

        <div className={styles.cardSection}>
          <div className={styles.cardHeading}>
            <h2>Latest</h2>
            <div className={styles?.linkText}>
              Latest
              <Image src={SVGImages.linkArrowRight} alt="link" />
            </div>
          </div>

          <div className={styles.cardContainer}>
            {Array(5)
              ?.fill(" ")
              ?.map((item, index) => {
                return <BlogCard />;
              })}
          </div>
        </div>

        <div className={styles.cardSection}>
          <div className={styles.cardHeading}>
            <h2>Environment</h2>
            <div className={styles?.linkText}>
              Environment
              <Image src={SVGImages.linkArrowRight} alt="link" />
            </div>
          </div>

          <div className={styles.cardContainer}>
            {Array(5)
              ?.fill(" ")
              ?.map((item, index) => {
                return <BlogCard />;
              })}
          </div>
        </div>

        <div className={styles.cardSection}>
          <div className={styles.cardHeading}>
            <h2>Environment</h2>
            <div className={styles?.linkText}>
              Environment
              <Image src={SVGImages.linkArrowRight} alt="link" />
            </div>
          </div>

          <div className={styles.cardContainer}>
            {Array(5)
              ?.fill(" ")
              ?.map((item, index) => {
                return <BlogCard />;
              })}
          </div>
        </div>

        <div className={styles.cardSection}>
          <div className={styles.cardHeading}>
            <h2>Battery Pack</h2>
            <div className={styles?.linkText}>
              Battery Pack
              <Image src={SVGImages.linkArrowRight} alt="link" />
            </div>
          </div>

          <div className={styles.cardContainer}>
            {Array(5)
              ?.fill(" ")
              ?.map((item, index) => {
                return <BlogCard />;
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
