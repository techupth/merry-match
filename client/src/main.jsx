import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import jwtInterceptor from "./utils/jwtInterceptors";
import { AuthProvider } from "./contexts/authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

jwtInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
