import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import todo from "../../assets/images/icon-todo.svg";
import reminder from "../../assets/images/icon-reminders.svg";
import planning from "../../assets/images/icon-planning.svg";
import calendar from "../../assets/images/icon-calendar.svg";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import arrowUp from "../../assets/images/icon-arrow-up.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [showFeature, setShowFeature] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const featureDrop = useRef();
  const companyDrop = useRef();

  const clickOutside = (e) => {
    if (featureDrop.current.contains(e.target)) {
      console.log("clicked inside");
    } else {
      setShowFeature(false);
    }

    if (companyDrop.current.contains(e.target)) {
    } else {
      setShowCompany(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [showCompany, showFeature]);

  const hamburgerClick = () => {
    setExpanded(!expanded);
    let bg = document.body;
    bg.style.backgroundColor = "#848484";
    setShowCross(true);
  };

  const crossClick = () => {
    setExpanded(!expanded);
    let bg = document.body;
    bg.style.backgroundColor = "white";
    setShowCross(false);
  };

  return (
    <div className={"nav-items"}>
      <div className="logo-item">
        <img src={logo} alt="" className={"logo-image"}></img>
      </div>

      <button className={"hamburger"} onClick={hamburgerClick}>
        <GiHamburgerMenu />
      </button>

      <div className={expanded ? "collapsed-items" : "nav-collapse-items"}>
        {showCross && (
          <button className={"cross"} onClick={crossClick}>
            <ImCross />
          </button>
        )}

        <div className="list-items">
          <article className={"features-item"}>
            <div
              className="dropdown"
              onClick={() => setShowFeature(!showFeature)}
              ref={featureDrop}
            >
              <item className="dropbtn">
                Features
                <img
                  src={showFeature ? arrowUp : arrowDown}
                  alt=""
                  className={"arrow"}
                />
              </item>
              {showFeature && (
                <div className="dropdown-content">
                  <a href="#">
                    <img src={todo} alt="" />
                    Todo List
                  </a>
                  <a href="#">
                    <img src={calendar} alt="" />
                    Calender
                  </a>
                  <a href="#">
                    <img src={reminder} alt="" />
                    Reminders
                  </a>
                  <a href="#">
                    <img src={planning} alt="" />
                    Planning
                  </a>
                </div>
              )}
            </div>
          </article>
          <article className={"features-item"}>
            <div
              className="dropdown"
              onClick={() => setShowCompany(!showCompany)}
              ref={companyDrop}
            >
              <item className="dropbtn">
                Company{" "}
                <img
                  src={showCompany ? arrowUp : arrowDown}
                  alt=""
                  className={"arrow"}
                />
              </item>
              {showCompany && (
                <div className="dropdown-content">
                  <a href="#">History</a>
                  <a href="#">Our Team</a>
                  <a href="#">Blog</a>
                </div>
              )}
            </div>
          </article>
          <article className="features-item">Careers</article>
          <article className="features-item">About</article>
        </div>

        <div className="user-items">
          <article className="user-item">
            <button className="loginBtn">Login</button>
          </article>
          <article className="user-item">
            <button className="registerBtn">Register</button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
