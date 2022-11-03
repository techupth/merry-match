import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProviders } from "./contexts/authentication.jsx";
// import jwtInterceptor from "./ulils/jwtInterceptors";
import { ChakraProvider } from "@chakra-ui/react";

// jwtInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <AuthProviders> */}
        <App />
      {/* </AuthProviders> */}
    </ChakraProvider>
  </React.StrictMode>
);
