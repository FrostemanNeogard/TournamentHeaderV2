import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App/App.tsx";
import "src/main.scss";
import { ThemeProvider } from "styled-components";
import { Theme } from "./util/styling/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
