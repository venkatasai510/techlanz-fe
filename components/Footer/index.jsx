import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "styles/Components/Footer/footer.module.scss";
import Button from "react-bootstrap/Button";

const Footer = () => {
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
          <span className={styles.heading}>Contact us</span>
          <span>Twenty One</span>
          <span>Thirty Two</span>
          <span>Fourty Three</span>
          <span>Fifty Four</span>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.heading}>Techlanz</span>
          <span>About us</span>
          <span>Careers</span>
          <span>Privacy policy</span>
          <span>Terms & conditions</span>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.heading}>Products</span>
          <span>Upskilling Courses</span>
          <span>Our Services</span>
          <span>Five Six</span>
          <span>Seven Eight</span>
        </div>
        <div className={styles.footerCol}>
          <span className={styles.heading}>Community</span>
          <span>One Two</span>
          <span>Three Four</span>
          <span>Five Six</span>
          <span>Seven Eight</span>
        </div>
      </div>

      <div className={styles.socialMediaLinks}>
        <p> Techlanz @ 2024. All rights reserved.</p>
        <div className={styles.icons}>
          <Image src={SVGImages.youtube} alt="youtube" />
          <Image src={SVGImages.facebook} alt="facebook" />
          <Image src={SVGImages.twitter} alt="twitter" />
          <Image src={SVGImages.instagram} alt="instagram" />
          <Image src={SVGImages.linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
