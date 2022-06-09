import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      <a
        href="https://github.com/nuyeno/my-weather-react-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-source code
      </a>{" "}
      by Naomi Uyeno
    </footer>
  </React.StrictMode>
);
