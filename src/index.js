import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { NeedsProvider } from "./components/Context";
ReactDOM.render(
  <NeedsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NeedsProvider>,
  document.getElementById("root")
);
reportWebVitals();
