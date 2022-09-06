import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1X4y06LN_rAZwj2Rvw1lbi82bMEyNXq2Gg&usqp=CAU",
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row mb-5">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h2>{weatherData.city}</h2>
            <h1>{weatherData.temperature}°</h1>
            <div className="description">{weatherData.description}</div>
            <div>
              <span className="mx-3">H:{weatherData.maxTemperature}°C</span>
              <span>L:{weatherData.minTemperature}°C</span>
            </div>
          </div>
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            <div className="date">
              <FormattedDate date={weatherData.date} />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-4">Humidity</div>
          <div className="col-4">Wind</div>
          <div className="col-4">Precipitation</div>
        </div>
        <div className="row">
          <div className="col-4">{weatherData.humidity}%</div>
          <div className="col-4">{weatherData.wind} km/h</div>
          <div className="col-4">11%</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ad98cfa59bdce2d355527064e3835264";
    let City = "tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
