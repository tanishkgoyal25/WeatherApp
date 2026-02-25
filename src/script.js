var Search = document.querySelector("#Search");
var SearchButton = document.querySelector("#SearchButton");
var weather = document.querySelector(".weather");

SearchButton.addEventListener(
     "click",
     async function () {
          var location = Search.value;
          var API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`;
          var response = await fetch(API);
          var data = await response.json();

          const icon = data.weather[0].icon;

          weather.innerHTML =
               `<h3 class="city">${data.name}</h3>
               <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="WeatherIcon" alt="Weather Icon">
               <h2 class="Temperature">${data.main.temp}°C</h2>
               <div class="MinMaxTemperature">
                    <div class="MinimumTemperature">Minimum Temprature: ${data.main.temp_min}°C</div>
                    <div class="MaximumTemperature">Maximum Temprature: ${data.main.temp_max}°C</div>
               </div>

               <div class="TempratureDetails">
                    <div class="Humidity">
                         <img src="Images/Humidity.svg">
                         <p>${data.main.humidity}%</p>
                         <p>Humidity</p>
                    </div>

                    <div class="Wind">
                         <img src="Images/Wind.svg">
                         <p>${data.wind.speed} km/h</p>
                         <p>Wind Speed</p>
                    </div>
                    
                    <div class="Thermometer">
                         <img src="Images/Thermometer.svg">
                         <p>${data.main.feels_like}°C</p>
                         <p>Feels Like</p>
                    </div>
               </div>`
     }
)