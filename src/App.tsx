import Todo from "./components/todo";
import "./App.css";
import { AuthenticatorProvider } from "./contexts/Authenticator";
import Login from "./components/login";

function App() {
  return (
    
    <AuthenticatorProvider>
      <Login />
      <Todo />
    </AuthenticatorProvider>
  )
}

export default App
