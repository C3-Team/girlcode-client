import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { NeedProvider } from "../src/components/Contexts/NeedContext";
import { NeedListProvider } from "../src/components/Contexts/NeedListContext";

ReactDOM.render(
  <BrowserRouter>
    <NeedListProvider>
      <NeedProvider>
        <App />
      </NeedProvider>
    </NeedListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
