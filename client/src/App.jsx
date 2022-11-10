import Unauthenticated from "./pages/router/Unauthenticated";
import { useAuth } from "./contexts/authentication";
import Authenticated from "./pages/router/Authenticated";

function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <Authenticated /> : <Unauthenticated />
}

export default App;