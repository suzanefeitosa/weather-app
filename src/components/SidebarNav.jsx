import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import styles from "./SidebarNav.module.css";
import { useState } from "react";

export function SidebarNav({change, searchByCity}) {

  const [cityName, setCityName] = useState("")

  return (
    <aside className={styles.sidebar}>
        <div className={styles.boxClose}>
            <button onClick={() => change()} className={styles.close}>X</button>
        </div>
      <div className={styles.search}>
        <button className={styles.iconSearchAndInput}>
           
          <MagnifyingGlass size={24} />
          <input
            className={styles.searchType}
            type="text"
            placeholder="search location"
            onChange={(event) => setCityName(event.target.value)}
          />
         
        </button>
        <button onClick={() => {
          change()
          searchByCity(cityName)
          }} className={styles.buttonSearch}>Search</button>
      </div>
    </aside>
  );
}
