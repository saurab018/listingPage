import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./pages/App.jsx";
import { ListProvider } from "./store/context";
import chakraTheme from "@chakra-ui/theme";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";

const { Button, Input, Spinner } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Spinner,
  },
});
console.log("chakraTheme", chakraTheme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ListProvider>
      <ChakraBaseProvider theme={theme}>
        <Router />
      </ChakraBaseProvider>
    </ListProvider>
  </React.StrictMode>
);
