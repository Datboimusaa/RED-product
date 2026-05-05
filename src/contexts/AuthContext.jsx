import { useState, useContext, createContext } from "react";
import API from "../services/API";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const register = async (data) => {
        const res = await API.post('/auth/register', data);
    };

    const login = async (data) => {
        const res = await API.post('/auth/login', data);
        localStorage.setItem('token', res.data.data.token);
        setUser(res.data.data.user);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};