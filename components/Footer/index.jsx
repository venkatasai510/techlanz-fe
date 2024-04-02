import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "styles/Components/Footer/footer.module.scss";
import Button from "react-bootstrap/Button";
import { useRouter } from "node_modules/next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.footerSection}>
      <div className={styles.topSection}>
        <Image src={SVGImages.logo} alt="logo" />

        <div className={styles.rightSection}>
          <InputGroup className="">
            <Form.Control placeholder="Enter your email to get the latest news..." />
          </InputGroup>
          <Button variant="success" className={styles.contactUs}>
            Subscribe
          </Button>
        </div>
      </div>

      <div className={styles.footerLinksContainer}>
        <div className={styles.footerCol}>
          <span
            className={styles.heading}
            onClick={() => router.push("/contact-us")}
          >
            Contact us
          </span>
          <div className={styles.contactUsItem}>
            <Image src={SVGImages.mail} className={styles.contactIcon} />
            <div className={styles.contactTag}>
              <a href="mailto:info@techlanz.com">info@techlanz.com</a>
            </div>
          </div>
          <div className={styles.contactUsItem}>
            <Image src={SVGImages.call} className={styles.contactIcon} />
            <div className={styles.contactTag}>+91 9047116404</div>
          </div>

          <div className={styles.contactUsItem}>
            <div className={styles.icons}>
              <Image src={SVGImages.youtube} alt="youtube" />
              <Image src={SVGImages.facebook} alt="facebook" />
              <Image src={SVGImages.twitter} alt="twitter" />
              <Image src={SVGImages.instagram} alt="instagram" />
              <Image src={SVGImages.linkedin} alt="linkedin" />
            </div>
          </div>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.heading}>Techlanz</span>
          <span>About us</span>
          <span>Careers</span>
          <span onClick={() => router.push("/privacyPolicy")}>
            Privacy policy
          </span>
          <span onClick={() => router.push("/termsAndCondition")}>
            Terms & conditions
          </span>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.heading}>Products</span>
          <span onClick={() => router.push("/courses")}>Courses</span>
          <span>Services</span>
          <span>Products & Solutions</span>
          <span>Tools</span>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.heading}>Resources </span>
          <span>Community</span>
          <span>Articles </span>
          <span>Webinars</span>
          <span>Case studies</span>
        </div>
      </div>

      <div className={styles.socialMediaLinks}>
        <p> Techlanz @ 2024. All rights reserved.</p>
        {/* <div className={styles.icons}>
          <Image src={SVGImages.youtube} alt="youtube" />
          <Image src={SVGImages.facebook} alt="facebook" />
          <Image src={SVGImages.twitter} alt="twitter" />
          <Image src={SVGImages.instagram} alt="instagram" />
          <Image src={SVGImages.linkedin} alt="linkedin" />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
