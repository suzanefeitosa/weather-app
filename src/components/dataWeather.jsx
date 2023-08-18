import styles from "./dataWeather.module.css";
import { NavigationArrow } from "@phosphor-icons/react";

export function DataWeather({ wind, humidity, visibility, air, iconWind, windDirection }) {
 
  return (
    <>
      <div className={styles.containerTitle}>
        <h1 className={styles.titleData}>Today’s Hightlights</h1>
      </div>
      <div className={styles.cards}>
        <div className={styles.cardWind}>
          <div className={styles.contentWind}>
            <h2 className={styles.titleWind}>Wind status</h2>
            <p className={styles.windData}>
              <span>{wind}</span>mph
            </p>
            <div className={styles.iconAndInfoWind}>
              <p className={styles.iconAndInfoWin}>
                <NavigationArrow
                  size={32}
                  weight="fill"
                  className={styles.iconWind}
                  style={{ transform: iconWind }}
                />
                <span className={styles.infoWind}>{windDirection}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cardHumidity}>
          <div className={styles.contentHumi}>
            <h2 className={styles.titleHumi}>Humidity</h2>
            <p className={styles.humiData}>
              {humidity}
              <span>%</span>
            </p>
            <div className={styles.containerProgress}>
              <div className={styles.percContainer}>
                <p className={styles.perc}>0</p>
                <p className={styles.perc}>50</p>
                <p className={styles.perc}>100</p>
              </div>
              <div className={styles.contentProgress}>
                <div className={styles.progressBarWrapper}>
                  <div
                    style={{ width: humidity + "%" }}
                    className={styles.progressBar}
                  ></div>
                </div>
              </div>
            </div>
            <div className={styles.contPercentage}>
              <p className={styles.percentage}>%</p>
            </div>
          </div>
        </div>
        <div className={styles.cardVisibility}>
          <div className={styles.contentVisi}>
            <h2 className={styles.titleVisib}>Visibility</h2>
            <p className={styles.visiData}>
              <span>{visibility}</span>miles
            </p>
          </div>
        </div>
        <div className={styles.cardAir}>
          <div className={styles.contentAir}>
            <h2 className={styles.titleAir}>Air Pressure</h2>
            <p className={styles.airData}>
              <span>{air}</span>mb
            </p>
          </div>
        </div>
      </div>
      <footer>
        <p className={styles.textFooter}>Created by <a href="https://github.com/suzanefeitosa">Suzane Feitosa ♥</a></p>
      </footer>
    </>
  );
}

{
}
