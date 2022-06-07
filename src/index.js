import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CurrentForecast from "./CurrentForecast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentForecast />
    <footer>
      <a href="https://github.com/nuyeno/my-weather-react-app" target="_blank">
        Open-source code
      </a>{" "}
      by Naomi Uyeno
    </footer>
  </React.StrictMode>
);
