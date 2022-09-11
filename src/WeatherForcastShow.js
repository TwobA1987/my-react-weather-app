import React from "react";
export default function WeatherForcastShow(props) {
  function formatDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dt = new Date(props.data.dt * 1000);

    let day = days[dt.getDay()];
    return day;
  }
  return (
    <div className="WeatherForcastShow">
      <div>{formatDay()}</div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={props.data.weather[0].description}
        />
      </div>
      <div>
        <span className="forcast-max-temp">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="forcast-min-temp">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
