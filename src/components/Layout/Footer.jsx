import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaAngleDoubleRight,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FooterCopywrite from "../Footer/FooterCopywrite";
import FooterPointerToTop from "../Footer/FooterPointerToTop";
import FooterTop from "../Footer/FooterTop";
const Footer = () => {
  return (
    <footer>
      <FooterPointerToTop />
      <FooterTop />
      <section id="footer">
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <h5>About</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="http://sumanta.infinityfreeapp.com/mentors">
                    <FaAngleDoubleRight />
                    Mentors
                  </a>
                </li>
                <li>
                  <a href="http://sumanta.infinityfreeapp.com/our-team">
                    <FaAngleDoubleRight />
                    Team
                  </a>
                </li>
                <li>
                  <a href="http://sumanta.infinityfreeapp.com/contact">
                    <FaAngleDoubleRight />
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="http://sumanta.infinityfreeapp.com/art-exhibition">
                    <FaAngleDoubleRight />
                    Exhibition
                  </a>
                </li>
                <li>
                  <a href="http://sumanta.infinityfreeapp.com/workshop">
                    <FaAngleDoubleRight />
                    Workshop
                  </a>
                </li>
                <li>
                  <a href="http://sumanta.infinityfreeapp.com/cultural-program">
                    <FaAngleDoubleRight />
                    Cultural Program
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <h5>Events</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="#">
                    <FaAngleDoubleRight />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaAngleDoubleRight />
                    Term and Condition
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaAngleDoubleRight />
                    Disclaimer
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <div>
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a target="_blank" href="https://facebook.com/provaswito.org">
                  <FaFacebook className="2xl" />
                </a>
              </li>

              <li className="list-inline-item">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Provaswito+Academy+of+Art+and+Culture/@23.7887266,87.3681024,14z/data=!4m8!1m2!2m1!1sprovaswito!3m4!1s0x39f75de12c9c8ab7:0x3380521acfd18943!8m2!3d23.7788706!4d87.3997126"
                >
                  <FaMapMarkerAlt className="2xl" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mail:provaswito@gmail.com" target="_blank">
                  <FaEnvelope className="2xl" />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <FooterCopywrite />
    </footer>
  );
};

export default Footer;
