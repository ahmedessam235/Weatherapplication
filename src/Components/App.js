import React, { useState, useEffect } from "react";
import CurrentTemperture from "./Currenttemperature/CurrentTemperature";
import DailyAndHourlyTemperature from "./DailyAndHourlyTemperature/DailyAndHourlyTemperature";
import Header from "./Header/Header";

function App() {
  const [temperatureReadings, saveTemperaturedata] = useState(0);
  const [measurementUnit, changeMeasurementUinit] = useState("F");
  useEffect(async () => {
    /* this is a work around for the API because they have disabled the CORS this solutin will not work if the aplication is deployed */

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/30.0074,31.4913`;
    const response = await fetch(api);
    const temperatureData = await response.json();
    saveTemperaturedata(temperatureData);
  }, []);
  function ConvertToCelsuis() {
    changeMeasurementUinit("C");
  }
  function ConvertToFahrenheit() {
    changeMeasurementUinit("F");
  }
  console.log(measurementUnit);
  if (temperatureReadings) {
    console.log("value updated");
    console.log(temperatureReadings);
    return (
      <div>
        <Header
          onConversiontoCelsuis={ConvertToCelsuis}
          onConversiontoFahrenheit={ConvertToFahrenheit}
        />
        <CurrentTemperture
          date={temperatureReadings.currently.time}
          summary={temperatureReadings.currently.summary}
          currentTemperature={parseInt(
            temperatureReadings.currently.temperature
          )}
          maxTemperature={parseInt(
            temperatureReadings.daily.data[0].apparentTemperatureHigh
          )}
          minTemperature={parseInt(
            temperatureReadings.daily.data[0].apparentTemperatureLow
          )}
          unit={measurementUnit}
          todaySummary={temperatureReadings.daily.data[0].summary}
        />

        {temperatureReadings.daily.data.map((temperatureItem, index) => {
          return (
            <DailyAndHourlyTemperature
              key={index}
              id={index}
              maxDailyTemperature={parseInt(
                temperatureItem.apparentTemperatureHigh
              )}
              day={temperatureItem.time}
              unit={measurementUnit}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1> Loading ......</h1>
      </div>
    );
  }
}

export default App;
