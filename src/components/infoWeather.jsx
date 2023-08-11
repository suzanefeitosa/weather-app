import styles from './infoWeather.module.css'

export function InfoWeather({dayWeek, imgWeather, maxTemperature, minTemperature, degreeType}) {

    const degreeValue = degreeType == "C" ? "ºC" : "ºF"
    if(degreeType != "C"){
        maxTemperature = maxTemperature * 1.8 + 32
        minTemperature = minTemperature * 1.8 + 32
    }

    return (
       <>
       <div className={styles.weatherWeek}>
        <div className={styles.containerDayImg}>
        <p className={styles.dayWeek}>{dayWeek}</p>
        <img className={styles.imgWeather} src="./src/assets/Hail.png" />
        </div>
        <div className={styles.temperature}>
        <p className={styles.maxDegree}>{maxTemperature}<span>{degreeValue}</span></p>
        <p className={styles.minDegree}>{minTemperature}<span>{degreeValue}</span></p>
        </div>
       </div>
       </>
    )
}

