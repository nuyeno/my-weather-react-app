import "./App.css";
import React from "react";
import CurrentForecast from "./CurrentForecast";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="weather-search">
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
    </div>
  );
}

export default App;
