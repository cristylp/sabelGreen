import React, { Component } from 'react';
import Scroll from './Scroll';
// import config from '../../../config';
import logo from './../images/logogris.png';
import { Link } from "gatsby";
import "./navbar.css"

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

myFunction(x) {
  x.classList.toggle("change");
}

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="navbar"
      >
        <div className="container">

          <Scroll
            onClick={_ => this.scrollToTop}
          >
            <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          </Scroll>


          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
             <div class="container-menu" >
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
          </button>

          <div
            className={`nav-items collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="sabel"
                  offset={-120}
                >
                  <a className="nav-link" href="#about">
                    Sabel Green
                  </a>
                </Scroll>
              </li>

              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="areas"
                  offset={-50}
                >
                  <a className="nav-link" href="#areas">
                    Áreas de negocio
                  </a>
                </Scroll>
              </li>


              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="equipo"
                  offset={-90}
                >
                  <a className="nav-link" href="#team">
                    Equipo
                  </a>
                </Scroll>
              </li>


              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="contacto"
                  offset={-120}
                >
                  <a className="nav-link" href="#contact">
                    Contacto
                  </a>
                </Scroll>
              </li>

            </ul>
            <div class="dropdown">
              <button class="dropbtn">ES</button>
              <div class="dropdown-content">
                <a href="/EN " >ENG</a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    );
  }
}


