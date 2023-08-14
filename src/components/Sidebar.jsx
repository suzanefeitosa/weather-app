import styles from "./Sidebar.module.css";
import { Crosshair, MapPin } from "@phosphor-icons/react";
import { CloudBackground } from "../assets";
import { useEffect, useState } from "react";



export function Sidebar({imgWeather, change, maxTemperature}) {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getLocation = () => {
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
         setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        },
        (error) => {
          console.error(error);
        }
      );

    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  
    useEffect(() => {
     getLocation()
    }, []);
  
    
      console.log("lat = " + latitude + " long = " + longitude)
     

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
        <h1 className={styles.number}>{maxTemperature}<span className={styles.graus}>ºC</span>
        </h1>
      </div>

      <h2 className={styles.titleWeather}>Shower</h2>

        <div className={styles.centerInfo}>
      <div className={styles.info}>
        <p className={styles.day}>Today</p><span className={styles.spanDay}>&bull;</span><p className={styles.dayTwo}>Tues, 8 aug</p>
      </div>
      </div>

      <footer>
        <MapPin className={styles.iconLoc} size={24} />
        <p className={styles.location}>Helsinki</p>
      </footer> 
    </aside>
  );
}
