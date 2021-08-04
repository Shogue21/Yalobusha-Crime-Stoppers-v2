import styles from '../styles/home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BackgroundSlider from 'react-background-slider'

const index = () => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => setIsHovered(!isHovered);

  const variants = {
    hovered: {scale: 1.5},
    nonHovered: {scale: 1}
  }

  return (
    <div className={styles.landing}>
      <div className={styles.overlay}></div>
      <div className={styles.center}>
      <BackgroundSlider images={["watervalley1.jpg", "coffeeville1.jpeg", "oakland1.jpeg", "coffeeville2.jpeg", "oakland2.jpeg", "watervalley2.jpeg", "coffeeville3.jpeg", "yalobusha.jpeg", "oakland3.jpeg", "coffeeville4.jpeg"]} transition={1} duration={5}/>
        <div className={styles.main}>
        <h1 className={styles.text}>Yalobusha County Crime Stoppers</h1>
        <p className={styles.slogan}>If you see something, or hear something, say something!</p>
        <div className={styles.buttons}>
          <Link href="about">
            <motion.a className={isHovered ? styles.transparent_btn_Hover : styles.button} 
            onMouseEnter={toggleHover} 
            onMouseLeave={toggleHover}
            animate={isHovered ? "hovered" : "nonHovered"}
            variants={variants}>
            Learn More</motion.a>
          </Link>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default index


