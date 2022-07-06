import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../dist/output.css";
// eslint-disable-next-line import/no-unresolved
import "virtual:windi.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
