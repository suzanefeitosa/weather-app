import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import styles from "./SidebarNav.module.css";

export function SidebarNav({change}) {

  return (
    <aside className={styles.sidebar}>
        <div className={styles.boxClose}>
            <button onClick={change} className={styles.close}>X</button>
        </div>
      <div className={styles.search}>
        <button className={styles.iconSearchAndInput}>
           
          <MagnifyingGlass size={24} />
          <input
            className={styles.searchType}
            type="text"
            placeholder="search location"
          />
         
        </button>
        <button className={styles.buttonSearch}>Search</button>
      </div>
    </aside>
  );
}
