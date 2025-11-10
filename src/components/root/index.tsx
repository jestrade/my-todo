import { useContext } from "react";

import { AuthenticatorContext } from "../../contexts/Authenticator";

import Private from "../private";
import Public from "../public";


const Root = () => {
  const { isAuthenticated } = useContext(AuthenticatorContext);
    return (
        <>
            {isAuthenticated ? <Private /> : <Public />}
        </>
    )
}

export default Root;