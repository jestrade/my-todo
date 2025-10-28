import React from "react";

export const AuthenticatorContext = React.createContext({
    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated: boolean) => { }
});


export const AuthenticatorProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    
    return (
        <AuthenticatorContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthenticatorContext.Provider>
    );
};

