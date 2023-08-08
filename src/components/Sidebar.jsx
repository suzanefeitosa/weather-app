import styles from "./Sidebar.module.css";
import { Crosshair, MapPin } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.buttonHeader}>
        <button className={styles.searchPlaces}>Search for places</button>
        <button className={styles.cross}>
          <Crosshair size={24} />
        </button>
      </header>

      <figure>
        <div className={styles.cloudBg}>
          <img
            className={styles.cloud}
            src="./src/assets/Cloud-background.png"
            alt="Cloud"
          />
          <div className={styles.centerContent}>
            <img
              className={styles.imgWeather}
              src="./src/assets/Shower.png"
              alt="Weather"
            />
          </div>
        </div>
      </figure>

      <div className={styles.temperature}>
        <h1 className={styles.number}>
        15<span className={styles.graus}>ºC</span>
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
