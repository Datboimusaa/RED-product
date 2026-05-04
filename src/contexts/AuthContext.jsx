import { useState, useContext, createContext } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (data)
}