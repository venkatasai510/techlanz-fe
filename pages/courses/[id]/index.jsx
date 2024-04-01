import LandingpageSliderCard from 'components/LandingPageSliderCard/index'
import Topbar from 'components/Topbar/index'
import React from 'react'
import style from "styles/Pages/IndividualCourse/IndividualCourse.module.scss"
import Button from "node_modules/react-bootstrap/esm/Button";
import SVGImages from "assets/images/index";
import Breadcrumbs from 'components/Breadcrumbs/BreadCrumbs';
import BookCall from 'components/BookCall/index';

function index() {
    const breadcrumbs = [
        { text: 'Home' },
        { text: 'Courses', url: '/courses' },
        { text: 'BMS', url: '/' },

    ];
    return (
        <div className={style.courseContainer}>
            <Topbar />
            <div className={style.breadcrumbsWrapper}>
                <Breadcrumbs items={breadcrumbs} />
            </div>
            <LandingpageSliderCard
                // showTopBar={true}
                title={
                    <div>
                        <h2 className={style.cardTitle}>
                            Battery+BMS Bootcamp
                        </h2>
                        {/* <h2 style={{ color: "#19aea5" }}>Training Programs</h2> */}
                    </div>
                }
                description={
                    "Understand a lithium-ion cell in depth. Learn how to build a battery pack from scratch, how to design a BMS board, build its algorithms and test on actual hardware at your home.Take your DIY skills to next level by learning to build the most in-demand hardware of EV industry."
                }
                button={
                    <Button className="greenButton">
                        Enroll Now
                        {/* <Image src={SVGImages.linkArrowRight} alt="RightArrow" /> */}
                    </Button>
                }
                price={
                    <div className={style.price}>
                        <h2> ₹75,000.00 </h2><div> ₹1,50,000.00</div>
                    </div>
                }
                image={SVGImages?.electricCar}
            />
            <BookCall />

        </div>
    )
}

export default index