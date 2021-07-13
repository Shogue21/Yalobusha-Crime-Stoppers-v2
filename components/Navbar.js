import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.header}><h3>Yalobusha County Crime Stoppers</h3></a>
            <div className={styles.links}>
                <a className={styles.link} href="/about">About Us</a>
                <a className={styles.link} href="/contact">Contact Us</a>
                <a className={styles.link} href="/tip">Submit a Tip</a>
            </div>
        </nav>
    )
}

export default Navbar