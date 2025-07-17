import { createContext, useContext, useState } from "react";


const CarritoContext = createContext();

export const CarritoProvider =({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto)=>{
        const productoExistente = carrito.find(item=> item.id === producto.id);
        if(!productoExistente) {
            setCarrito([...carrito, producto]);
        }
        console.log(producto.id);
    }
        const eliminarDelCarrito = (id) => {
            const nuevoCarrito = carrito.filter(item => item.id !== id);
            setCarrito(nuevoCarrito);
        }

        const vaciarCarrito = () =>{
            setCarrito([]);
        }

        const comprarCarrito = () => {
            // Aquí podrías implementar la lógica para procesar la compra
            alert("Compra realizada con éxito");
            setCarrito([]);
        }
    

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, comprarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}

export const useCarrito = () => useContext(CarritoContext);