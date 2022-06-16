import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "b28f15f03c06aa01b59bd379d3000b9a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

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
