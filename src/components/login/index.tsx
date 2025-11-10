import { useContext } from "react";
import { AuthenticatorContext } from "../../contexts/Authenticator";

const Login = () => {
    const { login } = useContext(AuthenticatorContext);
    return (
        <div>
            <button onClick={login}>Log in</button>
        </div>
    )
}

export default Login;