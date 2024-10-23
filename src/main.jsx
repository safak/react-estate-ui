import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Auth0Provider } from "@auth0/auth0-react";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="alokik.us.auth0.com"
      clientId="omxHbC8pVUj5SHgJ5O6ZMyopkg45vmhy"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
);
