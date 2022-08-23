import React from "react";
import "./Weather.css";
export default function Weather() {
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
          <h2>tehran</h2>
          <h1>20 °C</h1>
          <h4>Partly Cloudy</h4>
          <div>
            <span className="mx-3">H:30°C</span>
            <span>L:15°C</span>
          </div>
        </div>
        <div className="col-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1X4y06LN_rAZwj2Rvw1lbi82bMEyNXq2Gg&usqp=CAU"
            alt="partly-cloudy"
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-4">Humidity</div>
        <div className="col-4">Wind</div>
        <div className="col-4">Precipitation</div>
      </div>
      <div className="row">
        <div className="col-4">35%</div>
        <div className="col-4">18 km/h</div>
        <div className="col-4">11%</div>
      </div>
    </div>
  );
}
