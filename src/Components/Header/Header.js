import React from "react";
import "./Header.css";
import { Container, Row } from "react-bootstrap";
/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
const Header = () => {
  return (
    <header>
      <nav id="header">
        <div class="nav-menu" id="myNavMenu">
          <ul class="nav_menu_list">
            <li class="nav_list">
              <a href="#home" class="nav-link active-link">
                Home
              </a>
            </li>
            <li class="nav_list">
              <a href="#about" class="nav-link">
                About
              </a>
            </li>
            <li class="nav_list">
              <a href="#projects" class="nav-link">
                Courses
              </a>
            </li>
            <li class="nav_list">
              <a href="#contact" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div class="nav-logo">
          <p class="nav-name">DRIVING SCHOOL</p>
        </div>
        <div class="nav-button">
          <button class="btn">
            Contact <i class="uil uil-file-alt"></i>
          </button>
        </div>
        <div class="nav-menu-btn">
          <i class="uil uil-bars" onClick={myMenuFunction}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
