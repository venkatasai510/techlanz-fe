import React from "react";
import { FaVideo } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

import style from "styles/Components/Topbar/Contents/PopularCourses/popularCourses.module.scss";

const menuItems = [
  {
    icon: <FaVideo />,
    title: "Live",
  },
  {
    icon: <FaCirclePlay />,
    title: "Recorded",
  },
  {
    icon: <IoIosBriefcase />,
    title: "Corporate",
  },
];

const links = [
  {
    text: "Battery + BMS Bootcamp",
  },
  {
    text: "AI For Engineers",
  },
  {
    text: "Data Analytics for IOT",
  },
  {
    text: "System Sizing Master Class",
  },
];

export default function PopularCourses() {
  return (
    <div>
      <div className="d-flex align-items-center">
        {menuItems.map((menu, index) => (
          <div className={`d-flex align-items-center me-5 ${style.menu}`}>
            <span className="me-1 d-flex ">{menu.icon}</span>
            <span className={style.menuItem}>{menu.title}</span>
          </div>
        ))}
      </div>
      <div className={style.border}></div>
      <div>
        {links.map((link, index) => (
          <div className="p-2 mt-2 ms-2" key={index}>
            {link.text}
          </div>
        ))}
      </div>
      <div className={style.btnContainer}>
        <button className={style.button} onClick={() => {}}>
          Explore Courses <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}
