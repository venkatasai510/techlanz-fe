import LandingpageSliderCard from 'components/LandingPageSliderCard/index'
import Topbar from 'components/Topbar/index'
import React from 'react'
import style from "styles/Pages/IndividualCourse/IndividualCourse.module.scss"
import Button from "node_modules/react-bootstrap/esm/Button";
import SVGImages from "assets/images/index";
import Breadcrumbs from 'components/Breadcrumbs/BreadCrumbs';
import BookCall from 'components/BookCall/index';
import ProgramHighlightsCard from 'components/ProgramHighlightsCard/ProgramHighlightsCard';
import MentorSection from 'components/MentorSection/index';
import WhyUsSection from 'components/WhyUsSection/index';
import AccordianComponent from 'components/AccordianComponent/index';
import Image from 'next/image'
import Footer from 'components/Footer/index';

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
            <div className={style.courseTimeline}>
                <div className={style.timelineItem}>
                    <div className={style.label}>Learning Format</div>
                    <div className={style.content}>Online Bootcamp</div>

                </div>
                <div className={style.timelineItem}>
                    <div className={style.label}>Duration</div>
                    <div className={style.content}>6 Months</div>

                </div>
                <div className={style.timelineItem}>
                    <div className={style.label}>Start Date</div>
                    <div className={style.content}>7th May 2024</div>

                </div>
                <div className={style.timelineItem}>
                    <div className={style.label}>Hours of Learning</div>
                    <div className={style.content}>200+</div>

                </div>
                <div className={style.timelineItem}>
                    <div className={style.label}>Total Weekly Effort</div>
                    <div className={style.content}>7 Hours</div>

                </div>

            </div>
            <BookCall />
            <div className={style.courseOverviewContainer}>
                <div className={style.courseOverviewWrapper}>
                    <h2>Course Overview</h2>
                    <div className={style.overviewContent}>At Techlanz, we believe “Hardware is not Hard, if you get a right mentor, who has actually done it”.
                        The course covers all the practical topics covered by industry experts starting from Cell, BMS harware, BMS software, BMS algorithms to Battery designing and packaging.
                        The Sessions for each module starts with fundamental concepts and deep dive into more challenging practical examples.
                        <br /> <br />
                        That is why this course is designed to strengthen your fundamentals on the actual battery and BMS designing as well as covering all industry relevant practical concepts. We ensure that you make your hands dirty in this journey to give you truly practical experience of building a hardware.
                    </div>
                    <div className={style.programContainer}>
                        <h3>Program Highlights</h3>
                        <div className={style.programPreviewWrapper}>
                            <ProgramHighlightsCard />
                            <ProgramHighlightsCard />
                            <ProgramHighlightsCard />

                        </div>
                    </div>
                    <div className={style.enrollbtn}>
                        <Button className="greenButton">
                            Enroll Now
                            {/* <Image src={SVGImages.linkArrowRight} alt="RightArrow" /> */}
                        </Button>
                    </div>

                </div>
            </div>
            <MentorSection />
            <WhyUsSection />
            <div className={style.accordianContainer}>
                {[
                    "Who should use the app?",
                    "What is included with my subscription?",
                    "How do I get paid?",
                    "Is my personal information safe?",
                    "How can we get in touch?",
                    "How can we get in touch?",
                ]?.map((item, index) => {
                    return (
                        <div key={index} className={style.accor}>
                            <AccordianComponent title={item} />
                        </div>
                    );
                })}
            </div>
            <div className={style.contactSection}>
                <Image src={SVGImages.contantUS} alt="/" />
            </div>
            <Footer />
        </div>
    )
}

export default index
