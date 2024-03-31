import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import style from "styles/Components/Topbar/topbar.module.scss";
import Button from "react-bootstrap/Button";
import { useRouter } from "node_modules/next/router";

const Topbar = () => {
  const router = useRouter()
  return (
    <div>
      <Navbar className={`${style.topBarContainer} bg-body-tertiary`}>
        {/* <Container> */}
        <div className={style.middleSection}>
          <div>
            <Image src={SVGImages.logo} alt="logo" />
            <Navbar.Toggle />
          </div>
          <Dropdown>
            <Dropdown.Toggle className={style.select} id="dropdown-basic">
              Courses
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle className={style.select} id="dropdown-basic">
              Services
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="danger" className={style.dangerBtn}>
            Community
          </Button>
        </div>

        <div className={style.rightSection}>
          <p>Articles</p>
          <Dropdown>
            <Dropdown.Toggle className={style.select} id="dropdown-basic">
              More
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {router.pathname != "/login" && (
          <Button className={style.Loginbutton}>Login</Button>
          )}
        </div>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default Topbar;
