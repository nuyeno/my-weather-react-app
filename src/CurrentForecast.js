import React from "react";
import "./Current-Forecast.css";

export default function CurrentForecast() {
  let weatherData = {
    city: "Honolulu",
    temperature: 78,
    date: "Sunday 17:00",
    description: "Sunny",
    humidity: 78,
    wind: 15,
  };
  return (
    <div className="current-forecast">
      <div className="temp-now">
        <br />
        <h2>
          <div>{weatherData.city}</div>
          <span className="temperature">{weatherData.temperature}</span>
          <span className="units">
            <a href="/" className="active">
              °F
            </a>
            |
            <a href="/" className="celsius">
              °C
            </a>
          </span>
        </h2>
        <h3>
          <div className="row align-items-center">
            <div className="col-4">
              <ul className="details">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind speed: {weatherData.wind}mph</li>
              </ul>
            </div>
            <div className="col-4 current-weather-icon">weather icon</div>
            <div className="col-4 current-weather-description">
              <ul className="details">
                <li>Last updated: {weatherData.date}</li>
                <li>{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </h3>
      </div>
    </div>
  );
}
