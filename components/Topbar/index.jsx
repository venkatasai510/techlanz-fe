import React, { useState } from "react";
import { Navbar, Dropdown, Button, Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import SVGImages from "assets/images/index";
import Image from "next/image";
import style from "styles/Components/Topbar/topbar.module.scss";
import { FaChevronRight } from "react-icons/fa6";
import { AiFillFire } from "react-icons/ai";
import PopularCourses from "./Contents/PopularCourses/index";

const navigationLinks = {
  courses: [
    {
      title: "Popular Courses",
      icon: AiFillFire,
    },
    {
      title: "Electric Vehicle",
      icon: AiFillFire,
    },
    {
      title: "Ai For EV",
      icon: AiFillFire,
    },
    // {
    //   title: "Software For EV",
    //   icon: AiFillFire,
    // },
    // {
    //   title: "New Product Development",
    //   icon: AiFillFire,
    // },
  ],
};

const Topbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Course 1");

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = (item, e) => {
    setSelectedMenuItem(item);
    // Prevent the default behavior and stop propagation for link clicks
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Navbar className={`${style.topBarContainer} bg-body-tertiary`}>
      <Container>
        <div className={style.middleSection}>
          <div onClick={() => router.push("/")}>
            <Image src={SVGImages.logo} alt="logo" />
            <Navbar.Toggle />
          </div>
          <Dropdown
            show={showMenu}
            onToggle={handleMenuToggle}
            className="mega-menu"
          >
            <Dropdown.Toggle className={style.select} id="dropdown-basic">
              Courses
            </Dropdown.Toggle>
            <Dropdown.Menu
              className={`${style.megaMenuContent} ${showMenu ? "show" : ""}`}
            >
              <div>
                {/* Left section of mega menu */}
                <Row>
                  <Col xs={4}>
                    <div className={style.leftSection}>
                      <div className={style.heading}>Choose your Domain</div>
                      <div>
                        {navigationLinks.courses.map((nav, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={(e) => handleMenuItemClick(nav.title, e)}
                            className={`${style.menuItem} ${
                              selectedMenuItem === nav.title
                                ? style.selected
                                : ""
                            }`}
                          >
                            <div className={style.menuContentLeft}>
                              {nav.icon && <nav.icon />}
                              <a
                                href="#"
                                onClick={(e) =>
                                  handleMenuItemClick(nav.title.toString(), e)
                                }
                              >
                                {nav.title}
                              </a>
                            </div>
                            <FaChevronRight />
                          </Dropdown.Item>
                        ))}
                      </div>
                    </div>
                  </Col>
                  {/* Right section of mega menu */}
                  <Col xs={8}>{selectedMenuItem && <PopularCourses />}</Col>
                </Row>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle className={style.select} id="dropdown-basic">
              Services
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div>
                {/* Left section of mega menu */}
                <Row>
                  <Col xs={4}>
                    <div className={style.leftSection}>
                      <div className={style.heading}>Choose your Domain</div>
                      <div>
                        {navigationLinks.courses.map((nav, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={(e) => handleMenuItemClick(nav.title, e)}
                            className={`${style.menuItem} ${
                              selectedMenuItem === nav.title
                                ? style.selected
                                : ""
                            }`}
                          >
                            <div className={style.menuContentLeft}>
                              {nav.icon && <nav.icon />}
                              <a
                                href="#"
                                onClick={(e) =>
                                  handleMenuItemClick(nav.title.toString(), e)
                                }
                              >
                                {nav.title}
                              </a>
                            </div>
                            <FaChevronRight />
                          </Dropdown.Item>
                        ))}
                      </div>
                    </div>
                  </Col>
                  {/* Right section of mega menu */}
                  <Col xs={8}>{selectedMenuItem && <PopularCourses />}</Col>
                </Row>
              </div>
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
              <Dropdown.Item href="#/action-1">More 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">More 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">More 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {router.pathname !== "/login" && (
            <Button
              className={style.Loginbutton}
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Topbar;
