import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h2>{props.data.city}</h2>
          <h1>{props.data.temperature}</h1>
          <span className="unit">°C</span>
          <div className="description">
            {props.data.description},{" "}
            <span className="date">
              <FormattedDate date={props.data.date} />
            </span>
          </div>
          <div className="max-min-temp">
            <span className="mx-3">H:{props.data.maxTemperature}°C</span>
            <span>L:{props.data.minTemperature}°C</span>
          </div>
        </div>
        <div className="col-6">
          <img
            className="weather-icon"
            src={props.data.icon}
            alt={props.data.description}
          />
        </div>
      </div>

      <div className="row mt-5 hum-wind-press">
        <div className="col-4">Humidity:</div>
        <div className="col-4">Wind:</div>
        <div className="col-4">Pressure:</div>
      </div>
      <div className="row hum-wind-press-values">
        <div className="col-4">{props.data.humidity}%</div>
        <div className="col-4">{props.data.wind} km/h</div>
        <div className="col-4">{props.data.pressure}</div>
      </div>
    </div>
  );
}
