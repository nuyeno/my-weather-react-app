import React, { useState } from "react";
import "./Current-Forecast.css";
import FormalDate from "./FormalDate";
import axios from "axios";

export default function CurrentForecast() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

function showWeather(response) {
  setWeather({
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].main,
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
    date: new Date(response.data.dt * 1000),
    icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  })
  setLoading(true);
    }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);

  }
  function search() {
    let city = "Honolulu"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b28f15f03c06aa01b59bd379d3000b9a&units=imperial`;
    axios.get(url).then(showWeather);
  }

if (loading) {
  return (
    <div className="current-forecast">
      <div className="container">
        <div className="app-wrapper">
          <div className="card-search search-city">
            <div className="card-body">
              <span className="col-6">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder="Enter a city"
                    autofocus="on"
                    autoComplete="off"
                    value={CurrentForecast.city}
                    onChange={updateCity}
                  />
                  <span className="col-3 search-button">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="🔎 Search"
                    />
                  </span>
                  <span className="col-3 current-location">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="📍 Current"
                    />
                  </span>
                </form>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="temp-now">
        <br />
        <h2>
          <div>{city}</div>
          <span className="temperature">{weather.temperature}</span>
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
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind speed: {weather.wind} mph</li>
              </ul>
            </div>
            <div className="col-4 current-weather-icon">
              <img src={weather.icon} alt="weather-icon" />
            </div>
            <div className="col-4 current-weather-description">
              <ul className="details">
                <li>Last updated: <FormalDate date={weather.date} /></li>
                <li>{weather.description}</li>
              </ul>
            </div>
          </div>
        </h3>
      </div>
    </div>
  );
  } else { 
  search();
    return (    
    "Searching for data...")
  }
}
