import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import backgroundHeader from '../assets/backgroundHeader.jpg';
import grassNatural from '../assets/grassNatural.jpg';

function Home() {
  return (
    <>
       {/* Carrusel de ancho completo */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={grassNatural}
            alt="Slide 1"
            style={{ height: '450px', objectFit: 'scale-down' }}
          />
          <Carousel.Caption>
            <h3>Yuyos Naturales</h3>
            <p>La mejor selección de hierbas para tu mate.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={backgroundHeader}
            alt="Slide 1"
            style={{ height: '450px', objectFit: 'scale-down' }}
          />
          <Carousel.Caption>
            <h3>Yuyos Naturales</h3>
            <p>La mejor selección de hierbas para tu mate.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5">
        <h2 className="text-center mb-4">Destacados de productos</h2>
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Image
              src="https://images.unsplash.com/photo-1600891963934-96056afcc99d"
              alt="Hierba de Menta"
              roundedCircle
              fluid
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h5 className="mt-3">Hierba de Menta</h5>
            <p>Refrescante, ideal para digestión y energizar el mate.</p>
          </Col>

          <Col xs={12} sm={6} md={4} className="mb-4">
            <Image
              src="https://images.unsplash.com/photo-1590080877401-2196a59f0f3b"
              alt="Manzanilla"
              roundedCircle
              fluid
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h5 className="mt-3">Manzanilla</h5>
            <p>Suave y relajante, perfecta para infusiones antes de dormir.</p>
          </Col>

          <Col xs={12} sm={6} md={4} className="mb-4">
            <Image
              src="https://images.unsplash.com/photo-1615485299425-9e7cd7de9aee"
              alt="Cedrón"
              roundedCircle
              fluid
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h5 className="mt-3">Cedrón</h5>
            <p>Aromático, con notas cítricas, ideal para mezclar con yerba.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
