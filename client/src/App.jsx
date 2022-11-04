import Unauthenication from "./pages/Unauthenication";
import { useAuth } from "./contexts/authentication";
import Authenicationed from "./pages/Authenicationed";

function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <Authenicationed/> : <Unauthenication/>;
}

export default App;
