import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyData(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="WeatherForecast-Icon">
        <WeatherIcon code={props.data.weather[0].icon} size={32} />
      </div>
      <div className="high-low-temperature">
        <span className="temperature-high">
          <strong>{maxTemperature()}</strong>
        </span>
        <span className="temperature-low">{minTemperature()}</span>
      </div>
    </div>
  );
}
