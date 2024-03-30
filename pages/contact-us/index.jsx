import SVGImages from "assets/images/index";
import Topbar from "components/Topbar/index";
import Image from "node_modules/next/image";
import React from "react";
import styles from "styles/Components/ContactUs/contactUs.module.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "node_modules/react-bootstrap/esm/Button";
const ContactUs = () => {
  return (
    <>
      <Topbar />
      <div className={styles.ContactUsContainer}>
        <div className={styles.leftSection}>
          <p>Connect With Us: Your Questions, Our Answers! 🤝</p>
          <p>
            For any queries, Please reach out to us. Our Support team will get
            back to you within 24 hours.
          </p>

          <div>
            <Image src={SVGImages.message} alt="message" />
            Contact@techlanz.com
          </div>
          <div>
            <Image src={SVGImages.phone} alt="phone" />
            +91 7631783648
          </div>

          <Image src={SVGImages.contactUs} alt="contactUs" />
        </div>
        <div className={styles.rightSection}>
          <p>Contact us</p>

          <label>Name</label>
          <Form.Control
            placeholder="johndadev"
            onChange={(e) => console.log(e)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <label>Email</label>
          <Form.Control
            placeholder="johndoe@email.com"
            onChange={(e) => console.log(e)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <label>Phone No</label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
            <Form.Control
              placeholder="**********"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <label>Message</label>
          <Form.Control
            placeholder="eg."
            onChange={(e) => console.log(e)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />

          <Button>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
