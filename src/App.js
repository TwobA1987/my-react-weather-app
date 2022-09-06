import React from "react";
import Weather from "./Weather";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Tooba Raeesi and is{" "}
        <a
          href="https://github.com/TwobA1987/my-react-weather-app"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
