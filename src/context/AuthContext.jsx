import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    

    useEffect(() =>{
        const savedUser = localStorage.getItem("user");
        const savedToken = localStorage.getItem("token");
        if(savedUser && savedToken) {
            setUser(savedUser);
            setToken(savedToken);
        }
    }, []);

    const Login = (userName, password)=> {
        if(userName === "admin" && password === "1234"){    //si el usuario y contraseña son correctos
            const tokenFalso = "token1234";             // Simulamos un token
            setUser(userName);                          // Guardamos el usuario
            setToken(tokenFalso);            // Guardamos el token  
            localStorage.setItem("user", userName);                 // Guardamos el usuario en localStorage
            localStorage.setItem("token", tokenFalso);       // Guardamos el token en localStorage  
            return true;                                                                          
        }
        return false;
    }

    const Logout = () => {
        setUser(null);
        setToken(null);
        LocalStorage.removeItem("user");
        LocalStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ user, token, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    );


}

export const useAuth = () => useContext(AuthContext);
