import React from "react";
import "./styles/DailyAndHourlyTemperature.css";

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
function DailyAndHourlyTemperature(props) {
  var maximumDailyTemperature = 0;

  if (props.unit === "C") {
    maximumDailyTemperature = parseInt(
      (props.maxDailyTemperature - 32) * (5 / 9)
    );
  } else {
    maximumDailyTemperature = props.maxDailyTemperature;
  }
  var dayOfTheWeek = getDayOfTheWeek(props.day);
  if (props.id === 0) {
    //handles the case of the current day to be viewed as Today not by day in hourly view same implementation is needed
    dayOfTheWeek = "Today";
  }
  return (
    <div className="DailyAndHourlyTemperature">
      <div className="test">
        <p className="temperatureSummary">{maximumDailyTemperature}</p>
        <p className="hourly-daily-time">{dayOfTheWeek}</p>
      </div>
    </div>
  );
}
export default DailyAndHourlyTemperature;
