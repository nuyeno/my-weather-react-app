import React, { useState } from "react";
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

  if (loaded) {
    return (
      <div className="WeeklyForecast">
        <div className-="row">
          <div className="col">
              <DailyData data={forecast[0]} />
          </div>
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
