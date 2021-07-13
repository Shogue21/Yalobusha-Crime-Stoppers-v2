import styles from '../styles/home.module.css'
import { useState } from 'react'

const index = () => {
  const [isHover, setIsHover] = useState(false);

  const buttonHovered = () => {
    return <a className={styles.transparent_btn_Hover} href="/about" onMouseLeave={() => {setIsHover(false)}} >Learn More</a>
  }
  const buttonNotHovered = () => {
    return <a className={styles.button} href="/about" onMouseOver={() => {setIsHover(true)}}>Learn More</a>
  }

  return (
    <div className={styles.landing}>
      <div className={styles.center}>
        <h1 className={styles.text}>Yalobusha County Crime Stoppers</h1>
        <p className={styles.text}>If you see something, or hear something, say something!</p>
        <div className={styles.buttons}>
          {isHover && buttonHovered()}
          {!isHover && buttonNotHovered()}
        </div>
      </div>
    </div>
  )
}

export default index


