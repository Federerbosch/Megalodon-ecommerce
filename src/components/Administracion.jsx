// src/pages/Administracion.jsx
import React, { useState, useEffect } from "react";
import { Form, Button, Table, Alert, Modal, Container } from "react-bootstrap";

const API_URL = "https://678fe99049875e5a1a93cf32.mockapi.io/api/v1/Productos";

export default function Administracion() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch(() => setError("Error al cargar productos"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return setError("El nombre es obligatorio");
    if (isNaN(precio) || precio <= 0) return setError("El precio debe ser mayor a 0");
    if (descripcion.length < 10) return setError("La descripción debe tener al menos 10 caracteres");

    const nuevoProducto = { nombre, precio, descripcion };

    if (editandoId) {
      fetch(`${API_URL}/${editandoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      })
        .then(() => {
          setProductos(productos.map(p => (p.id === editandoId ? { ...p, ...nuevoProducto } : p)));
          resetForm();
        })
        .catch(() => setError("Error al editar producto"));
    } else {
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      })
        .then((res) => res.json())
        .then((data) => {
          setProductos([...productos, data]);
          resetForm();
        })
        .catch(() => setError("Error al agregar producto"));
    }
  };

  const resetForm = () => {
    setNombre("");
    setPrecio("");
    setDescripcion("");
    setEditandoId(null);
    setError("");
  };

  const handleEditar = (producto) => {
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setDescripcion(producto.descripcion);
    setEditandoId(producto.id);
  };

  const handleEliminar = (id) => {
    setShowModal(true);
    setProductoAEliminar(id);
  };

  const confirmarEliminacion = () => {
    fetch(`${API_URL}/${productoAEliminar}`, {
      method: "DELETE",
    })
      .then(() => {
        setProductos(productos.filter(p => p.id !== productoAEliminar));
        setShowModal(false);
        setProductoAEliminar(null);
      })
      .catch(() => setError("Error al eliminar producto"));
  };

  return (
    <div>
      <Container>  
      <h2>Administración de Productos</h2>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          {editandoId ? "Actualizar Producto" : "Agregar Producto"}
        </Button>
      </Form>

      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
              <td>{p.descripcion}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEditar(p)}>Editar</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleEliminar(p.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro que deseas eliminar este producto?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={confirmarEliminacion}>Eliminar</Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </div>
  );
}
