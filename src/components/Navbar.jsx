// src/components/Navbar.jsx
import { Navbar as BsNavbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCarrito } from '../context/CarritoContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { FaShoppingCart } from "react-icons/fa";
import { TopBar, BottomBar, Logo, NavLinks, HoverableLink, StyledLink } from "../styles/NavbarStyles.js";
import logoMate from "../assets/logoMate.png";

export default function Navbar() {
  const { carrito } = useCarrito();
  const { token, Logout } = useAuth();
  const navigate = useNavigate();

  const handleCarritoClick = () => {
    if (token) {
      navigate("/carrito");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/* Barra superior personalizada */}
      <TopBar>
        <Container className="d-flex justify-content-between align-items-center">
        <Logo src={logoMate} alt="Logo Tienda Yuyos" />
        <div className="d-flex align-items-center gap-3">
          {token ? (
            <HoverableLink
              as={Button}
              onClick={() => {
              Logout();
              navigate("/");
              }}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                color: "inherit",
                font: "inherit",
                cursor: "pointer"
              }}
              >
              Cerrar sesión
            </HoverableLink>
          ) : (
            <HoverableLink as={Link} to="/login">
              Acceder
            </HoverableLink>
          )}
          <div variant="light" className="position-relative" onClick={handleCarritoClick}>
            <FaShoppingCart size={20} />
            {carrito.length > 0 && (
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                {carrito.length}
              </Badge>
            )}
          </div>
        </div>
        </Container> 
      </TopBar>

      

      {/* Barra inferior personalizada */}
      <BottomBar>
        <Container>
          <NavLinks>
            <StyledLink to="/" className="text-dark text-decoration-none">Inicio</StyledLink>
            <StyledLink to="/productos" className="text-dark text-decoration-none">Productos</StyledLink>
            <StyledLink to="/contacto" className="text-dark text-decoration-none">Contacto</StyledLink>
            {token && (
              <StyledLink to="/admin" className="text-dark text-decoration-none">Administración</StyledLink>
            )}
          </NavLinks>
        </Container>
      </BottomBar>
    </>
  );
}
