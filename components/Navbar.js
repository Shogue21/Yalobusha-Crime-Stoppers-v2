import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h3 className={styles.header}>Yalobusha County Crime Stoppers</h3>
            <div className={styles.links}>
                <a className={styles.link} href="/about">About Us</a>
                <a className={styles.link} href="/tip">Submit a Tip</a>
            </div>
        </nav>
    )
}

export default Navbar