import { useContext } from "react";
import { AuthenticatorContext } from "../../contexts/Authenticator";

const Login = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticatorContext);
    return (
        <div>
            {isAuthenticated  ?
                <button onClick={() => setIsAuthenticated(false)}>Log out</button>
            : 
                <button onClick={() => setIsAuthenticated(true)}>Log in</button>
            }
        </div>
    )
}

export default Login;