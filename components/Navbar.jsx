import styles from "../styles/Navbar.module.css"
import Link from 'next/Link'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/">Genius</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="portfolio">Portfolio</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/works">Works</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/testimonials">Testimonials</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar