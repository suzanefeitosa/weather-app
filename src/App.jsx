import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";
import { SidebarNav } from "./components/SidebarNav";
import { InfoWeather } from "./components/infoWeather";
import { DataWeather } from "./components/dataWeather";
import { useEffect, useState } from "react";
import { Hail, LightCloud, Shower, Sleet, Thunderstorm } from "./assets";

function App() {
  const [degree, setDegree] = useState("C");
  const [changeComp, setChangeComp] = useState(true);
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("")
  const [todayTemp, setTodayTemp] = useState(0.0)
  const [nameWeather, setNameWeather] = useState("")
  const key = import.meta.env.VITE_API_KEY;

  const changeC = () => {
    setChangeComp(!changeComp);
  };

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
      setTodayTemp((todayTemp * 1.8 + 32).toFixed(1))
    }else if(degreeType == "C"){
      setTodayTemp(((todayTemp - 32) * 5/9).toFixed(1))
    }
  }

  }

  async function getTodayWeather() {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-8.0539&lon=-34.8811&appid=${key}`)
    .then((response) => response.json()).then((data) => {
        console.log(data)
      setCity(data.name)
      setNameWeather(data.weather[0].main)
      setTodayTemp((data.main.temp - 273.15).toFixed(1))
    })      
  }

  async function getForecast() {
    await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=-8.0539&lon=-34.8811&appid=${key}`)
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

   useEffect(()  =>  {
    getTodayWeather()
    getForecast() 
  }, []);





  return (
    <>
      <div className={styles.wrapper}>
        {changeComp ? (
          <Sidebar imgWeather={Shower} change={changeC} maxTemperature={todayTemp} city={city} weatherName={nameWeather} degreeType={degree}/>
        ) : (
          <SidebarNav change={changeC} />
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
              weather.map((item) => {
                return (
                <InfoWeather 
                    key={item.dt}   
                    dayWeek={"Tomorrow"}
                    imgWeather={Sleet}
                    maxTemperature={item.main.temp_max}
                    minTemperature={item.main.temp_min}
                    degreeType={degree}
                  />
                )
              })
            }    

          </div>

          <DataWeather humidity={"84"} />

        </main>
      </div>
    </>
  );
}

export default App;
