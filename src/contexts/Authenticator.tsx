import React from "react";

export const AuthenticatorContext = React.createContext({
    isAuthenticated: false,
    login: () => { },
    logout: () => { }
});


export const AuthenticatorProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const login = () => {
        setIsAuthenticated(true);
    };
    const logout = () => {
        setIsAuthenticated(false);
    }
    
    return (
        <AuthenticatorContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthenticatorContext.Provider>
    );
};

