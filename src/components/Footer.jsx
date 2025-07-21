// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FooterWrapper, SocialIcons } from "../styles/FooterStyles";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col md={6} className="mb-3 ">
            <h5 className="fw-bold">Tienda Yuyos🌿</h5>
            <p className="fw-bold">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </Col>

          <Col md={6} className="text-md-end">
            <h5 className="fw-bold">Redes Sociales</h5>
            <SocialIcons>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </SocialIcons>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
}

