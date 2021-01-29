import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ContextsProvider } from "./components/Context/Context";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";
console.log(process.env);
ReactDOM.render(
  // <InventoriesProvider>
  <ContextsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextsProvider>,
  // </InventoriesProvider>,
  document.getElementById("root")
);
reportWebVitals();
