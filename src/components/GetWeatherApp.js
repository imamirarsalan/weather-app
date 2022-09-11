import React, { useState } from 'react';
import "./weather.css"
import axios from 'axios';

const GetWeatherApp = () => {

   const [data, setData] = useState({});
   const [location, setLocation] = useState("");

   const searchLocation = (event) => {
      if (event.key === "Enter") {
         axios.get(url)
            .then((response) => { setData(response.data) })
         setLocation()
      }
   }
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
   return (
      <div className='app'>
         <div className="search">
            <input
               type="text"
               placeholder='Enter Location'
               value={location}
               onKeyPress={searchLocation}
               onChange={(e) => setLocation(e.target.value)}
            />
         </div>
         <div className="container">
            <div className="top">
               <div className="location">
                  <p>{data.name}</p>
               </div>
               <div className="temp">
                  {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
               </div>
               <div className="description">
                  {data.weather ? <p>{data.weather[0].main}</p> : null}
               </div>
            </div>
            {data.name !== undefined &&
               <div className="bottom">
                  <div className="feels">
                     {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                     <p>Feels Like</p>
                  </div>
                  <div className="humidity">
                     {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                     <p>Humidity</p>
                  </div>
                  <div className="wind">
                     {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}</p> : null}
                     <p>Wind Speed</p>
                  </div>
               </div>

            }
         </div>
      </div>
   );
};

export default GetWeatherApp;