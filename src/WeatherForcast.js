import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForcastShow from "./WeatherForcastShow";
import "./WeatherForcast.css";
export default function WeatherForcast(props) {
  let [forcastData, setForcastData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinate]);
  function handleResponse(response) {
    setForcastData(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForcast row">
        {forcastData.map(function (day, index) {
          if (index < 4) {
            return (
              <div className="col" key={index}>
                <WeatherForcastShow data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
    let latitude = props.coordinate.lat;
    let longitude = props.coordinate.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
