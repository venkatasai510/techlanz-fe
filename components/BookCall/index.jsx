import React from "react";
import styles from "styles/Components/BookCall/bookCall.module.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "node_modules/react-bootstrap/esm/Button";
import Image from "node_modules/next/image";
import SVGImages from "assets/images/index";

const BookCall = () => {
  return (
    <div className={styles.bookCallContainer}>
      <h2>Book A Call, now!</h2>
      <p>
        Experience the quality of our courses & services firsthand with a demo
        session, Live!
      </p>

      <div className={styles.inputSection}>
        <InputGroup className="">
          <Form.Control placeholder="Enter Email Address" />
        </InputGroup>

        <InputGroup className="">
          <InputGroup.Text id="basic-addon1">+91 </InputGroup.Text>
          <Form.Control placeholder="900001 1006" />
        </InputGroup>

        <Button>
          <div>
            Book Now
            <Image src={SVGImages.calendar} alt="calendar" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default BookCall;
