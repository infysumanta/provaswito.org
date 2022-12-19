import React from "react";
import { Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
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
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown
            title="Dropdown"
            id={`offcanvasNavbarDropdown-expand-lg`}
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
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
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown
            title="Dropdown"
            id={`offcanvasNavbarDropdown-expand-lg`}
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

export default MainMenu;
