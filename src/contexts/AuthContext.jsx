import { useState, useContext, createContext } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const register = async(data) => {
        const res = await axios;
    }
}