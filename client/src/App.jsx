import Unauthenticated from "./pages/Unauthenticated";
import { useAuth } from "./contexts/authentication";
import Authenticated from "./pages/Authenticated";

function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <Authenticated /> : <Unauthenticated />;
}

export default App;
