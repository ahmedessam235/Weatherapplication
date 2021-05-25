import React, { useState, useEffect } from "react";
import CurrentTemperture from "./Currenttemperature/CurrentTemperature";
import Header from "./Header/Header";

function App() {
  const [temperatureReadings, saveTemperaturedata] = useState(0);

  useEffect(async () => {
    /* this is a work around for the API because they have disabled the CORS this solutin will not work if the aplication is deployed */

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/30.0074,31.4913`;
    const response = await fetch(api);
    const temperatureData = await response.json();
    saveTemperaturedata(temperatureData);
  }, []);

  if (temperatureReadings) {
    console.log("value updated");
    console.log(temperatureReadings);
    return (
      <div>
        <Header />
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
          todaySummary={temperatureReadings.daily.data[0].summary}
        />
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
