import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1>{props.celsius}</h1>
        <span className="unit">
          °C |{" "}
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h1>{Math.round((props.celsius * 9) / 5 + 32)}</h1>
        <span className="unit">
          <a href="/" className="celsius" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
