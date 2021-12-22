import styles from "../styles/Intro.module.css"
import Image from "next/image"
import Circle from "./Circle"

const Intro = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="yellow" top="-50vh" left="-50vh" />
            <Circle backgroundColor="pink" right="-40vh" />
            <div className={styles.card}>
                <h1 className={styles.brand}><span>Eric</span></h1>
                <p className={styles.desc}>
                    Hi I am eric, xoxo programmer and stuff
                </p>
                <button className={styles.button}>Link here</button>
            </div>
            <div className={styles.card}>
                <Image 
                    src="/img/smoke.png"
                    layout="fill"
                    objectFit="cover" 
                    alt=""
                />
            </div>
        </div>
    )
}

export default Intro