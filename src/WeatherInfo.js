import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h2>{props.data.city}</h2>
          <WeatherTemperature celsius={props.data.temperature} />
          <div className="description">{props.data.description}</div>
          <div>
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
          <div className="date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-4">Humidity</div>
        <div className="col-4">Wind</div>
        <div className="col-4">Precipitation</div>
      </div>
      <div className="row">
        <div className="col-4">{props.data.humidity}%</div>
        <div className="col-4">{props.data.wind} km/h</div>
        <div className="col-4">11%</div>
      </div>
    </div>
  );
}
