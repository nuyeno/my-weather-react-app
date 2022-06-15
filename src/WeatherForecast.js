import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeeklyForecast">
      <div className-="row">
        <div className="col">Wed</div>
        <div className="WeatherForecast-Icon">
          <WeatherIcon code="01d" size={32} />
        </div>
        <div className="high-low-temperature">
          <span className="temperature-high">
            <strong>85°</strong>
          </span>
          <span className="temperature-low">72°</span>
        </div>
      </div>
    </div>
  );
}
