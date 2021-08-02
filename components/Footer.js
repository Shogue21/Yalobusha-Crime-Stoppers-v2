import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
     
            <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
            <div>
            
            <h1>Yalobusha Crime Stoppers</h1>
            <h2>Submit a Tip</h2>
            <div className={styles.call}>
            <div>
            <a className={styles.icons} href="tel:18669338477"><i className='bx bx-phone-call bx-tada-hover'></i></a>
            </div>
            <h2 className={styles.paragraph}><a href="tel:18669338477" className={styles.phoneLink} >Call: 1-866-933-TIPS (8477)</a></h2>
            </div>
</div>

            <div className={styles.imgDIV}>
                <img className={styles.msDPT} src="DPS-logo.png"></img>
            </div>
        </footer>
    )
}

export default Footer
