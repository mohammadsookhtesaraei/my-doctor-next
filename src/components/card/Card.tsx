import style from "./Card.module.css"

type TCardProps={
    children:React.ReactNode
}

export default function Card({children}:TCardProps) {
  return (
    <div className={style.card}>
        {children}
    </div>
  )
}
