import React, { useState } from "react";
import "./Current-Forecast.css";
import FormalDate from "./FormalDate";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function CurrentForecast(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  function showWeather(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      cityName: response.data.name,
    });
    setLoading(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function search() {
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
                <span className="col-9">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="search"
                      placeholder="Enter a city"
                      autoFocus="on"
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
                  </form>
                </span>
              </div>
            </div>
          </div>
          <div className="temp-now">
            <h1>
              <div className="city-searched text-capitalize">{weather.cityName}</div>
            </h1>
            <ul>
              <li>
                Last updated: <FormalDate date={weather.date} />
              </li>
              <li>{weather.description}</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <span className="current-weather-icon float-left">
                  <WeatherIcon code={weather.icon} />
                </span>
                <CurrentTemperature fahrenheit={weather.temperature} />
                
              </div>
              <div className="col-6 current-weather-description">
                <ul className="details">
                  <li>Humidity: {weather.humidity}%</li>
                  <li>Wind speed: {weather.wind} mph</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Searching for data...";
  }
}
