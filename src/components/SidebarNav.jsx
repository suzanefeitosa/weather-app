import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import styles from "./SidebarNav.module.css";

export function SidebarNav() {
  return (
    <aside className={styles.sidebar}>
        <div className={styles.boxClose}>
            <button className={styles.close}>X</button>
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
      <div className={styles.cities}>
        <button className={styles.city}>
          London <CaretRight className={styles.arrow} /> 
        </button>
        <button className={styles.city}>
          Barcelona <CaretRight className={styles.arrow} />
        </button>
        <button className={styles.city}>
          Long Beach <CaretRight className={styles.arrow}  />
        </button>
        {/* o caretRight só vai aparecer no hover! */}
      </div>
    </aside>
  );
}
