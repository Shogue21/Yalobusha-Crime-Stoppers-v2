import styles from '../styles/home.module.css'
import { useState } from 'react'
import Link from 'next/link'

const index = () => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => setIsHovered(!isHovered);

  return (
    <div className={styles.landing}>
      <div className={styles.center}>
        <h1 className={styles.text}>Yalobusha County Crime Stoppers</h1>
        <p className={styles.text}>If you see something, or hear something, say something!</p>
        <div className={styles.buttons}>
          <Link href="about">
            <a className={isHovered ? styles.transparent_btn_Hover : styles.button} 
            onMouseEnter={toggleHover} 
            onMouseLeave={toggleHover}>
            Learn More</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index


