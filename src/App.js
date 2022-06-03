import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";

function App() {
      return (
      <div className="weather-search">
        <div className="container">
          <div className="app-wrapper">
            <div className="card-search search-city">
              <div className="card-body">
                <span className="col-6">
                  <form>
                    <input
                      type="text"
                      placeholder="Enter city"
                      autofocus="on"
                      autoComplete="off"
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
