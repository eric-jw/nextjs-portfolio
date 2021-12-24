import styles from "../styles/Portfolio.module.css"
import Link from "next/Link"
import Image from "next/image"

const Portfolio = ({portfolioData}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>What do I do?</h1>
            <h1 className={styles.subtitle}>My Portfolio</h1>
            <div className={styles.portfolioCard}>
                {portfolioData.map((portfolioItem) => (
                    <Link passHref key={portfolioItem.id} href={`/portfolio/${portfolioItem.name}`}>
                        <div className={styles.portfolioItem}>
                            <div className={styles.desc}>{portfolioItem.desc}</div>
                            <span className={styles.cat}>{portfolioItem.title}</span>
                            <div className={styles.media}>
                                <Image 
                                    src={`/img/${portfolioItem.thumbnail}`} 
                                    alt=""
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
