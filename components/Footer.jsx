import styles from "../styles/Footer.module.css"
import Link from "next/Link"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.carL}>
                <h1 className={styles.title}>Eric Whitehead</h1>
                <h1 className={styles.linkTitle}>
                    <a href="/contact" passHref>
                        <span>Hire Me</span>
                        <Image src="/img/ling.png" width="40px" height="40px" alt="" />
                    </a>
                </h1>

            </div>
            <div className={styles.carS}>

            </div>
            <div className={styles.carS}>

            </div>
        </div>
    )
}

export default Footer