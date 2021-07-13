import styles from '../styles/home.module.css'

const index = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.center}>
        <h1 className={styles.text}>Yalobusha County Crime Stoppers</h1>
        <p className={styles.text}>If you see something, or hear something, say something!</p>
        <div className={styles.buttons}>
          <a className={styles.button} href="/about"><button className={styles.buttonSize}>Learn More</button></a>
        </div>
      </div>
    </div>
  )
}

export default index


