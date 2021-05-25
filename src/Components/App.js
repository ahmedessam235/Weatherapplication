import React from "react";
import Header from "./Header/Header";


// var temperatureReadings ;
function App() {
  // function useTemperatureReadings(){
  //   return temperatureReadings;
  // }
  function saveTemperatureData (temperatureData){
    console.log(temperatureData," test test test");
    // temperatureReadings = temperatureData;
  }
  function getTemperatureData(){

    /* this is a work around for the API because they have disabled the CORS this solutin will not work if the aplication is deployed */
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/30.0074,31.4913`; 
    
    fetch(api)
      .then((response) => {
      return response.json();
   
      })
      .then((temperatureData) => {
        saveTemperatureData(temperatureData);
        
      });
      
   }
   getTemperatureData();

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
