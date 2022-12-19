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

export default MainNavBar;
