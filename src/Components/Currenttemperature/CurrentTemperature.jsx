import React from "react";
import "./styles/CurrentTemperature.css";

function getDayOfTheWeek(TodayDate) {
  var dateConstructor = new Date(TodayDate * 1000);
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dayOfWeek = days[dateConstructor.getDay()];
  return dayOfWeek;
}
function calculteDate(TodayDate) {
  var dayAndDate = "";
  const dayOfTheWeek = getDayOfTheWeek(TodayDate);
  const fullDate = new Date(TodayDate * 1000);
  const year = fullDate.getFullYear();
  const day = fullDate.getDate();
  dayAndDate = dayOfTheWeek + " " + day + ", " + year;
  return dayAndDate;
}

function CurrentTemperture(props) {
  
  const todayData = calculteDate(props.date);
  var todayTemperature = 0;
  var maximumTemperature = 0;
  var minimmTemperature = 0;
  if (props.unit === "C"){
    todayTemperature = parseInt((props.currentTemperature -32) *(5/9));
    maximumTemperature = parseInt((props.maxTemperature -32) *(5/9));;
    minimmTemperature = parseInt((props.minTemperature -32) *(5/9));;
  }
  else {
    todayTemperature = props.currentTemperature;
    maximumTemperature = props.maxTemperature;
    minimmTemperature = props.minTemperature;
  }
  return (
    <div className="CurrentTemperature">
      <div className="leftSideReadings">
        <h1 className="cityName">
          <b>New Cairo</b>
        </h1>
        <p className="date">
          <b>{todayData}</b>
        </p>
        <p className="summary">
          <b>{props.summary}</b>
        </p>
      </div>
      <div class="rightSideReadings">
        <h1 className="realtimeTemperature">
          {todayTemperature}&#xb0;{" "}
        </h1>
        <h2 className="minAndMaxTemperature">
          {maximumTemperature}&#xb0; / {minimmTemperature}&#xb0;
        </h2>
        <p className="todaySummary">{props.todaySummary}</p>
      </div>
    </div>
  );
}
export default CurrentTemperture;
