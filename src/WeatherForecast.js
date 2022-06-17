import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import DailyData from "./DailyData";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForcast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForcast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeeklyForecast">
        <div className="row">
          {forecast.map(function (dailyWeather, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyData data={dailyWeather} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "b28f15f03c06aa01b59bd379d3000b9a";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
