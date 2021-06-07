Weather app is  implemented using React.
The Web app get the maximum, lowsest, current, weekly and hourly Temperature of NewCairo city.
HOW TO RUN : 
- install NPM and Node.
- inside the directory in folder weather-app run the following commands from the commandline : 1 - npm install 2 - npm run.
- when you enter the website enter  the URL https://cors-anywhere.herokuapp.com/ and request temporoay access to use the Dark Sky Api.


Know issues : 
 - borders on the weekly Temperatures reading are not rendered as a single line
 - location is fixed on NewCairo only in the futre geolocation needs to be implemented in the code 
Notes : 
- the API used is dark sky API and the API prevent the CORS for security reasons a work around was done is to use cors-anywhere before sending the GET request
- for Eg. user need to send fetch requst to DarkSky API https://api.darksky.net/forecast[API KEY]/[Longitutde],[Latitude] so instead the fetch request is sent 
  like this : https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast[API KEY]/[Longitutde],[Latitude].
- the web app uses the latitude and longitude of NewCairo city in egypt and these parameters  embedded in it's code .

updates : 
  26/5/2021:
 - daily and hourly Temperatures are working now.
 
     missing implementation :
     - using icons.
     - using carousel to fit the hourly readings in one row and to match figma design.

 7/6/2021:
 -  used overflow-x property to show the daily temperutures in one row along with webkit styling for the horizontal scroll bar.
 
     missing implementation : 
     - using icons 
     - fixing left margin error for the temperature view
  
  To-Do :
   - fixing styling/bugs
   - adding server using Node/Express JS for this application in order to stop using CORS anywhere 
   - finishing all the missing implementation.
   - adding geolocation detection feature in order to browser to detect the location of the user and sending it dark SKY api
   - finding a way to detect a city from the latitude and longitude values " probably will be a free API, needs more research "
   - hosting this application  on heroku or AWS free tier account.
   
