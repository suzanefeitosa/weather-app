import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";
import { SidebarNav } from "./components/SidebarNav";
import { InfoWeather } from "./components/infoWeather";
import { useState } from "react";

function App() {

  const [degree, setDegree] = useState("C")

  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar imgWeather="./src/assets/Shower.png" />
        {/* <SidebarNav/> */}

        <main>

        <div className={styles.buttonCOrF}>
      <button onClick={() => setDegree("C")} className={degree == "C" ? `${styles.cOrF}` : `${styles.cOrF}  ${styles.colorType}`}>ºC</button>
        <button onClick={() => setDegree("F")} className={degree == "F" ? `${styles.cOrF}` : `${styles.cOrF}  ${styles.colorType}`}>ºF</button>
          </div>

          <div className={styles.content}>
            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={"./src/assets/sleet.png"}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={"./src/assets/Clear.png"}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={"./src/assets/Hail.png"}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={"./src/assets/LightRain.png"}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />

            <InfoWeather
              dayWeek={"Tomorrow"}
              imgWeather={"./src/assets/Snow.png"}
              maxTemperature={16}
              minTemperature={11}
              degreeType={degree}
            />
          </div>

          {/* <div className={styles.progressBarWrapper}>
            <div style={{width:varNameAPI.propHumidity+"%"}} className={styles.progressBar}></div>
          </div> */}
        </main>
      </div>
    </>
  );
}

export default App;
