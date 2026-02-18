import Card from "@/components/card/Card"
import styles from "./page.module.css"
import FilterBtn from "@/components/filter-button/FilterBtn";


const items=Array(100).fill(null).map((_,i)=> i + 1);

export default function Search() {
  return (
    <div className={styles.search}>
        <div className={styles.filter}>
            <Card>
                <div className="title">زوج یا فرد</div>
                <div className={styles.btn}>
                <FilterBtn>زوج</FilterBtn>
                <FilterBtn>فرد</FilterBtn>
                </div>
            </Card>
        </div>
        <ul className={styles.result}>
         {items.map((item)=>(
            <li key={item}>{item}</li>
         ))}
        </ul>

    </div>
  )
}
