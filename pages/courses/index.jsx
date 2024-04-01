import SVGImages from "assets/images/index";
import Footer from "components/Footer/index";
import Topbar from "components/Topbar/index";
import Button from "node_modules/react-bootstrap/esm/Button";
import React from "react";
import styles from "styles/Pages/courses/courses.module.scss";
import Image from "node_modules/next/image";
import CourseCard from "components/CourseCard/index";
import Breadcrumbs from "components/Breadcrumbs/BreadCrumbs";
import { useRouter } from "node_modules/next/router";


const breadcrumbs = [
  { text: 'Home' },
  { text: 'Courses', url: '/courses' },
];
const Courses = () => {
  const router = useRouter()

  const handleExplore = (item) => {
    console.log("reaching")
    router.push(`courses/${item?.id}`)
  }
  return (
    <div>
      <Topbar />
      <div className={styles.wrapper}>
        <Breadcrumbs items={breadcrumbs} />
        <section>
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
                    className={`${styles.tabButton} ${index === 0 ? styles.selected : ""
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
                        explore={() => handleExplore(item)}
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
      <div className={styles.contactSection}>
        <Image src={SVGImages.contantUS} alt="/" />
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Courses;
