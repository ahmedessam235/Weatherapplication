import React from "react";
import "./styles/DailyAndHourlyButtons.css";
function DailyAndHourlyButtons(props) {
  function getHourlyTemperature() {
    props.onUsingHourlyTemperature(props.getHourlyData);
  }
  function getDailyTemperature() {
    props.onUsingDailyTemperature(props.getDailyData);
  }
  return (
    <div className="DailyAndHourlyButtons">
      <button
        id="Hourly-button"
        className="btn btn-primary-outline"
        onClick={getHourlyTemperature}
      >
        Hourly
      </button>
      <button
        id="Daily-button"
        className="btn btn-primary-outline"
        onClick={getDailyTemperature}
      >
        Daily
      </button>
    </div>
  );
}
export default DailyAndHourlyButtons;
