import React from "react";
import "./styles/DailyAndHourlyButtons.css";
function DailyAndHourlyButtons(){
    return (
        <div className = "DailyAndHourlyButtons">
             <button
          id="Hourly-button"
          className="btn btn-primary-outline"
        >
          Hourly
          
        </button>       
        <button
          id="Daily-button"
          className="btn btn-primary-outline"
        >
          Daily
        </button>     
        </div>
    );
}
export default DailyAndHourlyButtons;