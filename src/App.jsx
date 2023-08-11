import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";
import { SidebarNav } from "./components/SidebarNav";
import { InfoWeather } from "./components/infoWeather";
import { DataWeather } from "./components/dataWeather";
import { useState } from "react";

function App() {

  const [degree, setDegree] = useState("C")

  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar imgWeather="./src/assets/Shower.svg" />
        {/* <SidebarNav/> */}

        <main>

        <div className={styles.buttonCOrF}>
      <button onClick={() => setDegree("C")} className={degree == "C" ? `${styles.cOrF}` : `${styles.cOrF}  ${styles.colorType}`}>ºC</button>
        <button onClick={() => setDegree("F")} className={degree == "F" ? `${styles.cOrF}` : `${styles.cOrF}  ${styles.colorType}`}>ºF</button>
          </div>

          <div className={styles.content}>
            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={"./src/assets/Sleet.svg"}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={"./src/assets/Clear.svg"}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={"./src/assets/Hail.svg"}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={"./src/assets/LightRain.svg"}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={"./src/assets/Snow.svg"}
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
