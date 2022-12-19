import React from "react";
import { Container } from "react-bootstrap";

const FooterTop = () => {
  return (
    <Container fluid className="footer-top">
      <div
        className="text-center"
        style={{
          fontSize: "20px",
          fontFamily:
            "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        }}
      >
        Provaswito intend to explore itself as a platform promote new artists in
        world’s art fraternity.
      </div>
    </Container>
  );
};

export default FooterTop;
