import React, { Component } from "react";
import logo from './../images/logogris.png'
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css"

export default class Navbar extends Component {
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
                to="cards"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Sabel Greenn
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="areas"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Áreas de negocio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="equipo"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Equipo
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="contacto"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contacto
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

