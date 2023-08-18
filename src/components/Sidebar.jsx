import styles from "./Sidebar.module.css";
import { Crosshair, MapPin } from "@phosphor-icons/react";
import { CloudBackground } from "../assets";
import { format } from "date-fns";



export function Sidebar({imgWeather, change, maxTemperature, degreeType, weatherName, city, getLocation}) {

  var todaysDate = format(new Date(), 'EEE, d MMM');


  return (

    <aside className={styles.sidebar}>
      <header className={styles.buttonHeader}>
        <button onClick ={change} className={styles.searchPlaces}>Search for places</button>
        <button onClick={() => getLocation()} className={styles.cross}>
          <Crosshair size={24} />
        </button>
      </header>

      <figure>
        <div className={styles.cloudBg}>
          <img
            className={styles.cloud}
            src={CloudBackground}
            alt="Cloud"
          />
          <div className={styles.centerContent}>
            <img
              className={styles.imgWeather}
              src={imgWeather}
              alt="Weather"
            />
          </div>
        </div>
      </figure>

      <div className={styles.temperature}>
        <h1 className={styles.number}>{maxTemperature}<span className={styles.graus}>º{degreeType}</span>
        </h1>
      </div>

      <h2 className={styles.titleWeather}>{weatherName}</h2>

        <div className={styles.centerInfo}>
      <div className={styles.info}>
        <p className={styles.day}>Today</p><span className={styles.spanDay}>&bull;</span><p className={styles.dayTwo}>{todaysDate}</p>
      </div>
      </div>

      <footer className={styles.footerSidebar}>
        <MapPin className={styles.iconLoc} size={24} />
        <p className={styles.location}>{city}</p>
      </footer> 
    </aside>
  );
}
