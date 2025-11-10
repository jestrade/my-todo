import React from "react";
import axios from "axios";
import config from "../config";

export const AuthenticatorContext = React.createContext({
    isAuthenticated: false,
    login: ({ email, password }: { email: string, password: string }) => { },
    logout: () => { }
});


export const AuthenticatorProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const login = ({ email, password }: { email: string, password: string }) => {
        axios.post(config.API_BASE_URL + "/login", {
            email,
            password
        })
        .then(response => {
            setIsAuthenticated(true);
            localStorage.setItem("token", response.data.accessToken);
        })
        .catch(error => {
            console.error(error);
        });
    };
    const logout = async () => {
        setIsAuthenticated(false);
        await axios.post(config.API_BASE_URL + '/logout', null, {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});
        localStorage.removeItem("token");
    }
    
    return (
        <AuthenticatorContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthenticatorContext.Provider>
    );
};

