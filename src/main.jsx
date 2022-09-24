import React from "react";
import ReactDOM from "react-dom/client";

import Modal from "react-modal";
import "./index.css";
// eslint-disable-next-line import/no-unresolved
import "virtual:windi.css";

import "./components/Cent/cent.css";
import Explore from "./components/Cent/Explore";
import Profile from "./components/Cent/Profile";
// import Learning from "./components/Cent/Learning";

Modal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);
