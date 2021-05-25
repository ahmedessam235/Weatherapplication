import React from "react";
import "./styles/Header.css";

function Header(props) {
  function convertToCelsius (){   
    props.onConversiontoCelsuis(props.convertToCelsuis);
  }
 function convertToFahrenheit (){
   props.onConversiontoFahrenheit(props.ConvertToFahrenheit);
 }
  return (
    <div className="Header ">
      <h2>
        <b>INSTAWEATHER</b>
      </h2>
      <div className="TemperatureButtons">
        <button id="Celsius-button" className="btn btn-primary-outline" onClick = {convertToCelsius}>
          C
        </button>
        <button id="Fahrenheit-button" className="btn btn-primary-outline" onClick = {convertToFahrenheit}>
          F
        </button>
      </div>
    </div>
  );
}

export default Header;
