import styles from './infoWeather.module.css'

export function InfoWeather({dayWeek, imgWeather, maxTemperature, minTemperature, degreeType}) {


    return (
       <>
       <div className={styles.weatherWeek}>
        <div className={styles.containerDayImg}>
        <p className={styles.dayWeek}>{dayWeek}</p>
        <img className={styles.imgWeather} src={imgWeather} />
        </div>
        <div className={styles.temperature}>
        <p className={styles.maxDegree}>{maxTemperature}<span>º{degreeType}</span></p>
        <p className={styles.minDegree}>{minTemperature}<span>º{degreeType}</span></p>
        </div>
       </div>
       </>
    )
}

