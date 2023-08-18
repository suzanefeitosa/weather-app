import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";
import { SidebarNav } from "./components/SidebarNav";
import { InfoWeather } from "./components/infoWeather";
import { DataWeather } from "./components/dataWeather";
import { useEffect, useState } from "react";
import { format, parseISO } from 'date-fns';
import { Clear,  HeavyCloud, HeavyRain, LightCloud, LightRain, Snow, Thunderstorm } from "./assets";

function App() {
  const [degree, setDegree] = useState("C");
  const [changeComp, setChangeComp] = useState(true);
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("")
  const [wind, setWind] = useState("")
  const [iconRotation, setIconRotation] = useState("")
  const [windDirection, setWindDirection] = useState("")
  const [humidity, setHumidity] = useState ("")
  const [visibility, setVisibility] = useState("")
  const [air, setAir] = useState("")
  const [todayTemp, setTodayTemp] = useState(0.0)
  const [nameWeather, setNameWeather] = useState("")
  const [long, setLong] = useState("")
  const [lat, setLat] = useState("")
  const key = import.meta.env.VITE_API_KEY;
  
  useEffect(()  =>  {
    getLocation()
  }, []);

  useEffect(() => {
    if(lat != "") {
      getTodayWeather()
      getForecast() 
    }
  },[lat, long])

  const changeC = () => {
    setChangeComp(!changeComp);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {          
          setLat(position.coords.latitude)
          setLong(position.coords.longitude)
        },
        (error) => {
          console.error(error);
        }
      );

    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }



  const changeDegreeType =  (degreeType) => {
    if(degree != degreeType){
    setDegree(degreeType) 
    setWeather(
      weather.map((weatherItem) => {
        if(degreeType == "F"){
          weatherItem.main.temp_max = (weatherItem.main.temp_max * 1.8 + 32).toFixed(1)
          weatherItem.main.temp_min = (weatherItem.main.temp_min * 1.8 + 32).toFixed(1)
        }else if(degreeType == "C"){
          weatherItem.main.temp_max = ((weatherItem.main.temp_max - 32) * 5/9).toFixed(1)
          weatherItem.main.temp_min = ((weatherItem.main.temp_min  - 32) * 5/9).toFixed(1)
        }
        return weatherItem
      })
    )
    if(degreeType == "F"){
      setTodayTemp((todayTemp * 1.8 + 32).toFixed(0))
    }else if(degreeType == "C"){
      setTodayTemp(((todayTemp - 32) * 5/9).toFixed(0))
    }
  }

  }

  async function getTodayWeather() {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`)
    .then((response) => response.json()).then((data) => {
      setCity(data.name)
      setNameWeather(data.weather[0].main)
      setTodayTemp((data.main.temp - 273.15).toFixed(0))
      setWind((data.wind.speed * 2.23694).toFixed(1))
      setHumidity(data.main.humidity)
      setVisibility((data.visibility * 0.000621371192).toFixed(1))
      setAir(data.main.pressure)
      setIconRotation(`rotate(${data.wind.deg}deg)`)
      setWindDirection(data.wind.deg)
    })      
  }

  async function getForecast() {
    await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}`)
    .then((response) => response.json()).then((data) => {

      var filteredWeatherList = data.list.filter((weather) => {
        if(weather.dt_txt.split(" ")[1] == "12:00:00"){
          weather.main.temp_max = (weather.main.temp_max - 273.15).toFixed(1)
          weather.main.temp_min = (weather.main.temp_min - 273.15).toFixed(1)
          return weather
        }
      })
     
      setWeather(filteredWeatherList)
    })      
  }

 
  async function getTodayWeatherByCity(cityName) {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
    .then((response) => response.json()).then((data) => {
      setCity(data.name)
      setNameWeather(data.weather[0].main)
      setTodayTemp((data.main.temp - 273.15).toFixed(0))
      setWind((data.wind.speed * 2.23694).toFixed(1))
      setHumidity(data.main.humidity)
      setVisibility((data.visibility * 0.000621371192).toFixed(1))
      setAir(data.main.pressure)
      setIconRotation(`rotate(${data.wind.deg}deg)`)
      setWindDirection(data.wind.deg)
    })      
  }

  async function getForecastByCity(cityName) {
    await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`)
    .then((response) => response.json()).then((data) => {
      var filteredWeatherList = data.list.filter((weather) => {
        if(weather.dt_txt.split(" ")[1] == "12:00:00"){
          weather.main.temp_max = (weather.main.temp_max - 273.15).toFixed(1)
          weather.main.temp_min = (weather.main.temp_min - 273.15).toFixed(1)
          return weather
        }
      })
     
      setWeather(filteredWeatherList)
    })      
  }

  const searchByCity = (cityName) => {
    getForecastByCity(cityName)
    getTodayWeatherByCity(cityName)
    setLat("")
    setLong("")
  }

  const getWindDirection = (angle) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(angle / 22.5);
    return directions[(index % 16)];
  };

  const getImageWeather = (weatherType, weatherId) => {

    switch (weatherType) {
      case "Clouds":
        return weatherId > 802 ? HeavyCloud : LightCloud;

      case "Clear":
        return Clear;

      case "Snow":
        return Snow;

      case "Rain":
        return HeavyRain;

      case "Drizzle":
        return LightRain;

      case "Thunderstorm":
        return Thunderstorm;

      default: 
        return Clear
    }
  }

  
  return (
    <>
      <div className={styles.wrapper}>
        {changeComp ? (
          <Sidebar imgWeather={getImageWeather(nameWeather)} change={changeC} maxTemperature={todayTemp} city={city} weatherName={nameWeather} degreeType={degree} getLocation={getLocation}/>
        ) : (
          <SidebarNav change={changeC} searchByCity={searchByCity} />
        )}
        <main>
          <div className={styles.buttonCOrF}>
            <button
              onClick={() => changeDegreeType("C")}
              className={
                degree == "C"
                  ? `${styles.cOrF}`
                  : `${styles.cOrF}  ${styles.colorType}`
              }
            >
              ºC
            </button>
            <button
              onClick={() => changeDegreeType("F")}
              className={
                degree == "F"
                  ? `${styles.cOrF}`
                  : `${styles.cOrF}  ${styles.colorType}`
              }
            >
              ºF
            </button>
          </div>

          <div className={styles.content}>
          
            {
              weather.map((item, i) => {
                return (
                <InfoWeather 
                    key={item.dt}   
                    dayWeek={ i === 0 ? "Tomorrow" : format(parseISO(item.dt_txt), 'EEE, d MMM')}
                    imgWeather={getImageWeather(item.weather[0].main, item.weather[0].id)}
                    maxTemperature={item.main.temp_max}
                    minTemperature={item.main.temp_min}
                    degreeType={degree}
                  />
                )
              })
            }    

          </div>

          <DataWeather 
          wind={wind}
          humidity={humidity}
          visibility={visibility}
          air={air}
          iconWind={iconRotation}
          windDirection={getWindDirection(windDirection)}
          />

        </main>
      </div>
    </>
  );
}

export default App;
