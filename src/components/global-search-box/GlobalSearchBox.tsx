
import styles from "./GlobalSearchBox.module.css"


import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

export default function GlobalSearchBox() {
  return (
    <div className={styles.global}>
        <div className={styles.prefix}>
            <MingcuteSearchLine/>
        </div>

        <input className={styles.input} type="text"  placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..." />

        <div className={styles.divider}></div>
        <div className={styles.suffix}>

            <button>
                <MingcuteLocationLine/>
                همه شهرها
            </button>
        </div>
    </div>
  )
}
