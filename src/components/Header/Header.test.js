import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ContextsProvider } from "../Context/Context";
import Header from "./Header";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ContextsProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ContextsProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
