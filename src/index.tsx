import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import React from "react";

const container = document.getElementById("root") as Element;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
