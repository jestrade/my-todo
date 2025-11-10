import { useContext } from "react";
import { AuthenticatorContext } from "../../contexts/Authenticator";

const LoginButton = () => {
  const { login } = useContext(AuthenticatorContext);
  
  return (<button onClick={login}>Login</button>);
}

export default LoginButton;