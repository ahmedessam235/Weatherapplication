import React from "react";
import "./styles/Header.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Container";
// import Col from "react-bootstrap/Container";
function Header() {
  return (
    <div className="Header ">
      <h2>
        <b>INSTAWEATHER</b>
      </h2>
      <div className="TemperatureButtons">
        <button id="Celsius-button" className="btn btn-primary-outline">
          C
        </button>
        <button id="Fahrenheit-button" className="btn btn-primary-outline">
          F
        </button>
      </div>
    </div>
  );
}

export default Header;
