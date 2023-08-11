import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";
import { SidebarNav } from "./components/SidebarNav";
import { InfoWeather } from "./components/infoWeather";
import { DataWeather } from "./components/dataWeather";
import { useState } from "react";
import { Hail, LightCloud, Shower, Sleet, Thunderstorm } from "./assets";



function App() {

  const [degree, setDegree] = useState("C")
  const [changeComp, setChangeComp] = useState(true)

  const changeC = () => {
   setChangeComp(!changeComp)
  }

  return (
    <>
      <div className={styles.wrapper}>

        {
          changeComp  
          ?  
          <Sidebar 
          imgWeather={Shower}
          change={changeC} 
          />
          :
          <SidebarNav
          change={changeC} 
          />

        }
        <main>

        <div className={styles.buttonCOrF}>
      <button onClick={() => setDegree("C")} className={degree == "C" ? `${styles.cOrF}` : `${styles.cOrF}  ${styles.colorType}`}>ºC</button>
        <button onClick={() => setDegree("F")} className={degree == "F" ? `${styles.cOrF}` : `${styles.cOrF}  ${styles.colorType}`}>ºF</button>
          </div>

          <div className={styles.content}>
            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={Sleet}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={Thunderstorm}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={LightCloud}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={Hail}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={LightCloud}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />
          </div>

          <DataWeather
          humidity={"84"}
          
          />

        </main>
      </div>
    </>
  );
}

export default App;
