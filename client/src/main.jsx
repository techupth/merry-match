import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProviders} from './contexts/authentication'
import { ChakraProvider } from "@chakra-ui/react";
import jwtInterceptor from "./ulils/jwtInterceptors";

jwtInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      
        <App />
      
    </ChakraProvider>
  </React.StrictMode>
);
