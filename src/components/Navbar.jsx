// src/components/Navbar.jsx
import { Navbar as BsNavbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCarrito } from '../context/CarritoContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const { carrito } = useCarrito();
  const { token, Logout } = useAuth(); // Traemos el token y logout
  const navigate = useNavigate();

  const handleCarritoClick = () => {
    if (token) {
      navigate("/carrito"); // Si está autenticado, va al carrito
    } else {
      navigate("/login"); // Si no, lo manda al login
    }
  };

  return (
    <>
      {/* Barra superior */}
      <BsNavbar bg="dark" variant="dark" fixed="top">
        <Container className="d-flex justify-content-between align-items-center">
          <BsNavbar.Brand as={Link} to="/">Tienda Yuyos</BsNavbar.Brand>
          <div className="d-flex gap-3">
            {token ? (
              <Button onClick={Logout} variant="outline-light">Cerrar sesión</Button>
            ) : (
              <Button as={Link} to="/login" variant="outline-light">Acceder</Button>
            )}

            <Button variant="outline-light" className="position-relative" onClick={handleCarritoClick}>
              <FaShoppingCart size={20} />
              {carrito.length > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                  {carrito.length}
                </Badge>
              )}
            </Button>
          </div>
        </Container>
      </BsNavbar>

      <div style={{ marginTop: '56px' }}></div>

      {/* Barra inferior */}
      <BsNavbar bg="light" variant="light" className="border-top border-bottom sticky-top">
        <Container className="justify-content-center">
          <Nav className="text-center gap-4">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            {token && (
              <Nav.Link as={Link} to="/admin">Administración</Nav.Link>
            )}
          </Nav>
        </Container>
      </BsNavbar>
    </>
  );
}
