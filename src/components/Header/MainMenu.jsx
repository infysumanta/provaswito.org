import React from "react";
import { Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { FaHome, FaCalendarAlt } from "react-icons/fa";

import logo from "../../assets/logo.png";
const MainMenu = () => {
  return (
    <Navbar.Offcanvas
      id={`offcanvasNavbar-expand-lg`}
      aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
          Offcanvas
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-start flex-grow-1 pe-3">
          <Nav.Link
            href="#action1"
            className="flex justify-content align-items"
          >
            Home
          </Nav.Link>
          <NavDropdown title="Events" id={`offcanvasNavbarDropdown-expand-lg`}>
            <NavDropdown.Item href="#">Workshop</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Art Exhibition</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Cultural Program</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Other Event</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="News Cover"
            id={`offcanvasNavbarDropdown-expand-lg`}
          >
            <NavDropdown.Item href="#">News TV Cover</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">News Paper Cover</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <a
          className="navbar-brand d-none d-lg-block text-center main-logo"
          href="#"
        >
          <img
            src={logo}
            style={{ width: "125px", height: "auto" }}
            alt="logo"
          />
        </a>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavDropdown
            title="About Us"
            id={`offcanvasNavbarDropdown-expand-lg`}
          >
            <NavDropdown.Item href="#action3">Our Mentors</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">Our Team</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action1">Contact Us</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

export default MainMenu;
