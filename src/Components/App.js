import React, { useState, useEffect } from "react";
import CurrentTemperture from "./Currenttemperature/CurrentTemperature";
import DailyAndHourlyTemperature from "./DailyAndHourlyTemperature/DailyAndHourlyTemperature";
import DailyAndHourlyButtons from "./DailyAndHourlyButtons/DailyAndHourlyButtons"
import Header from "./Header/Header";

function App() {
  const [temperatureReadings, saveTemperaturedata] = useState(0); //the variable used to store the JSON object from DarkSky Api
  const [measurementUnit, changeMeasurementUinit] = useState("F"); //this  variable is changed based on the celsuis and fahrenite buttons
  useEffect(async () => {
    /* this is a work around for the API because they have disabled the CORS this solutin will not work if the aplication is deployed */

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/30.0074,31.4913`; //latitidue and longitude are fixed on NewCairo City
    const response = await fetch(api);
    const temperatureData = await response.json();
    saveTemperaturedata(temperatureData);
  }, []);
  /* The two functions Below are used to check which button is pressed for unit conversion*/
  function ConvertToCelsuis() {
    changeMeasurementUinit("C");
  }
  function ConvertToFahrenheit() {
    changeMeasurementUinit("F");
  }
  console.log(measurementUnit);
  if (temperatureReadings) {
    //check is done to check if the API has responded with the needed data or not.
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
       0<DailyAndHourlyButtons />
       <hr id= "topline"></hr>
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
        <hr id= "bottomline"></hr>  
      </div>
    );
  } else {
    return (
      //conditional rendering in case the values are not loaded
      <div class="loading-screen">
        <h1>
          {" "}
          please enter url https://cors-anywhere.herokuapp.com/corsdemo and
          request access to use the app
        </h1>
      </div>
    );
  }
}

export default App;
