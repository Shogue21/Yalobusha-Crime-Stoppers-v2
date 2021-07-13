import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                <img className={styles.logo} src="logo.gif"></img>
                <a href="/" className={styles.header}><h3>Yalobusha County Crime Stoppers</h3></a>
            </div>
            <div className={styles.links}>
                <a className={styles.link} href="/about">About</a>
            </div>
        </nav>
    )
}

export default Navbar