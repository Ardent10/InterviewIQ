import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { AppStateProvider, globalReducers, initialState } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AppStateProvider reducer={globalReducers} initialState={initialState}>
          <App />
        </AppStateProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
