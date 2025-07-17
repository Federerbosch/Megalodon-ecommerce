import { useCarrito } from '../context/CarritoContext.jsx';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Productos() {
    const [productos, setProductos] = useState([]);
    const { agregarAlCarrito } = useCarrito();
    const [cargando, setCargando] = useState(true);

    useEffect(() =>{
        const fetchProductos = async () =>{
            try {
                const response = await fetch('https://678fe99049875e5a1a93cf32.mockapi.io/api/v1/Productos')
                const data = await response.json();
                setProductos(data);
            } catch (error){
                console.error('Error al cargar los productos:', error);
            } finally {
                setCargando(false);
            }
        };
        fetchProductos();
    }, []);

    if (cargando) {
        return <div>Cargando productos...</div>;
    }

    return (
        <Container>
            <h2>Productos</h2>
            <Row>
                {productos.map((producto) => (
                    <Col md={4} key={producto.id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={producto.imagen} />
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>${producto.precio}</Card.Text>
                                <Button 
                                    variant="primary" 
                                    onClick={() => agregarAlCarrito(producto)}
                                    
                                >
                                    Agregar al carrito
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )



}