import React, { useState } from "react";
import "./CurrentTemperature.css"; 

export default function CurrentTemperature(props) {
    const [unit, setUnit] = useState("fahrenheit");
    function toCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function toFahrenheit(event) {
      event.preventDefault();
      setUnit("fahrenheit");
    }
    if (unit === "fahrenheit") {
        return (
      <span className="CurrentTemperature">
        <span className="temperature">{props.fahrenheit}</span>
        <span className="units">
            °F |
          <a href="/" className="CelsiusUnit" onClick={toCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
      let celsius =  (props.fahrenheit - 32) * 5/9;
      return (
        <span className="CurrentTemperature">
          <span className="temperature">{Math.round(celsius)}</span>
          <span className="units">
            <a href="/" className="FahrenheitUnit" onClick={toFahrenheit}> °F </a> |
              °C
          </span>
        </span>
      );
  }
}