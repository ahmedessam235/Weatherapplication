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

  if (props.unit === "C"){
    maximumDailyTemperature = parseInt((props.maxDailyTemperature -32) *(5/9));
  }
  else {
    maximumDailyTemperature = props.maxDailyTemperature;
  
  }
  var dayOfTheWeek = getDayOfTheWeek(props.day);
  if (props.id === 0 ){
    dayOfTheWeek ="Today"
  }
  return (
    <div className="DailyAndHourlyTemperature">
      <p>{maximumDailyTemperature}</p>
      <p>{dayOfTheWeek}</p>
    </div>
  );
}
export default DailyAndHourlyTemperature;
