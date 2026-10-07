import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null)
export default function AuthProvider({ children }) {
    const navigate=useNavigate()
    const [user, setUser] = useState((localStorage.getItem("currentUserEmail") ? { email: localStorage.getItem("currentUserEmail") } : null));
    function signUp(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.find((u) => u.email === email)) {
            return { success: false, error: "email alraedy existing" }
        }
        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUserEmail", email)

        setUser({ email })
        return { success: true }


    }
    function login( email, password ) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u) => u.email === email && u.password === password)
        if (!user) {
            return { success: false, error: "invalid user or password" }
        }
localStorage.setItem("currentUserEmail",email)
        setUser({ email })
        return { success: true }

    }
    function logout() {
        localStorage.removeItem("currentUserEmail");
        setUser(null);
        navigate("/")

    }
    return <AuthContext.Provider value={{ signUp, user, logout, login }}>{children}</AuthContext.Provider>

}
// ----creating hook--------
export function useAuth(){
    const context=useContext(AuthContext)
    return context;
}