import styles from '../styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                <Link href="/"><a className={styles.noDecor}><img className={styles.logo} src="logo.gif"></img></a></Link>
                <Link href="/" className={styles.header}><a className={styles.noDecor}><h3>Yalobusha County Crime Stoppers</h3></a></Link>
            </div>
            <div className={styles.links}>
                <Link className={styles.link} href="/about"><a className={styles.noDecor}>About</a></Link>
            </div>
        </nav>
    )
}

export default Navbar