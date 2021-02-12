import React, { Component } from "react";
import logo from './../images/logogris.png'
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css"

export default class NavbarEn extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="cardsEn"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Sabel Green
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="areasEn"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Business areas
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="equipoEn"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Team
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="contactoEn"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
