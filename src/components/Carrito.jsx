// src/pages/Carrito.jsx
import { useCarrito } from "../context/CarritoContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito, comprarCarrito } = useCarrito();

  const total = carrito.reduce((sum, item) => sum + parseFloat(item.precio || 0), 0);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Mi Carrito</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <Row>
            {carrito.map((producto) => (
              <Col key={producto.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={producto.imagen} height="200" style={{ objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                      <strong>Precio:</strong> ${producto.precio}
                    </Card.Text>
                    <Button variant="danger" onClick={() => eliminarDelCarrito(producto.id)}>
                      Eliminar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-4">
            <h5>Total: ${total.toFixed(2)}</h5>
            <Button variant="warning" onClick={()=> comprarCarrito()}>Comprar</Button>
            <Button variant="warning" onClick={vaciarCarrito}>Vaciar Carrito</Button>
          </div>
        </>
      )}
    </Container>
  );
}
