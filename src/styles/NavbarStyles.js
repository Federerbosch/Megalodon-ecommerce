
import styled from "styled-components";
import { Link } from "react-router-dom";

// Barra superior (rosa fuerte)
export const TopBar = styled.div`
  background-color: #f8a9bb;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Logo del mate
export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

// Barra inferior (rosa claro)
export const BottomBar = styled.div`
  background-color: #fcd9df;
  padding: 4px 0;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
`;

// Contenedor de enlaces en la barra inferior
export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #a94442;
      text-decoration: underline;
    }
  }
`;

// Botón tipo enlace para cerrar sesión o login
export const LinkButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-weight: bold;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #a94442;
    text-decoration: underline;
  }
`;

// Enlace estilizado reutilizable para simular botones con comportamiento de link
export const HoverableLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    color: #a94442;
    text-decoration: underline;
    cursor: pointer;
  }
`;
