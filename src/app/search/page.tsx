import Card from "@/components/card/Card"
import styles from "./page.module.css"


const items=Array(100).fill(null).map((_,i)=> i + 1);

export default function Search() {
  return (
    <div className={styles.search}>
        <div className={styles.filter}>
            <Card>
                <div className="title">زوج یا فرد</div>
                <button>زوج</button>
                <button>فرد</button>
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
