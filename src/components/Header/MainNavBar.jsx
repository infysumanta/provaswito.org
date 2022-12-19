import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import MainMenu from "./MainMenu";
const MainNavBar = () => {
  return (
    <Navbar
      bg="warning"
      expand="lg"
      className="mb-3 text-black"
      fixed="top"
      style={{ opacity: 1, background: "#ffa707" }}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="d-lg-none">
          <img
            src={logo}
            style={{ width: "100px", height: "auto" }}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <MainMenu />
      </Container>
    </Navbar>
  );
};

const Head = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ opacity: 1, background: "#ffa707" }}
    >
      <a className="navbar-brand d-lg-none" href="#">
        <img
          src="front/images/logo.png"
          style={{ width: "100px", height: "auto" }}
          alt="logo"
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggle"
        aria-controls="navbarToggle"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarToggle"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="fa fa-home"></i>&nbsp;Home
              <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-calendar" aria-hidden="true"></i> Events
            </a>
            <div
              className="dropdown-menu bg-warning"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="workshop">
                <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                Workshop
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="art-exhibition">
                <i className="fa fa-trello" aria-hidden="true"></i> Art
                Exhibition
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="cultural-program">
                <i
                  className="fa fa-american-sign-language-interpreting"
                  aria-hidden="true"
                ></i>
                Cultural Program
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="other-event">
                <i className="fa fa-book" aria-hidden="true"></i> Other Event
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-newspaper-o" aria-hidden="true"></i> News
              Cover
            </a>
            <div
              className="dropdown-menu bg-warning"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="news-tv-cover">
                <i className="fa fa-television" aria-hidden="true"></i> News TV
                Cover
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="news-paper-cover">
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> News
                Paper Cover
              </a>
            </div>
          </li>
        </ul>
        <a
          className="navbar-brand d-none d-lg-block text-center main-logo"
          href="#"
        >
          <img
            src="front/images/logo.png"
            style={{ width: "125px", height: "auto" }}
            alt="logo"
          />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-life-ring" aria-hidden="true"></i> About Us
            </a>
            <div
              className="dropdown-menu bg-warning"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#mentor">
                <i className="fa fa-comments-o" aria-hidden="true"></i>
                Our Mentors
              </a>

              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#team">
                <i className="fa fa-users" aria-hidden="true"></i> Our Team
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              <i className="fa fa-envelope" aria-hidden="true"></i> Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavBar;
