import Unauthenticated from "./pages/router/Unauthenticated";
import { useAuth } from "./contexts/authentication";
import Authenticated from "./pages/router/Authenticated";
import AdminAuthenticated from "./pages/router/AdminAuthenticated";

const App = () => {
  const auth = useAuth();

  return auth.isAdminAuthenticated === true ? (
    <AdminAuthenticated />
  ) : auth.isAuthenticated ? (
    <Authenticated />
  ) : (
    <Unauthenticated />
  );
};

export default App;
