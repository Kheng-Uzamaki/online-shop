import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{ backgroundColor: "#153448", color: "#fff", padding: "10px 0" }}
    >
      <Container>
        <Row>
          <Col className="text-center">
            <p>Kheng-Shop &copy; {currentYear}</p>
            <p>
              <a
                href="/about"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                About
              </a>
              <a
                href="/contact"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                Contact
              </a>
              <a
                href="/privacy"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Privacy Policy
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
