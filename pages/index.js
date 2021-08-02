import styles from '../styles/home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {TwitterFollowButton} from 'react-twitter-embed';
import { signIn, signOut, useSession } from "next-auth/client";

const index = () => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => setIsHovered(!isHovered);
  const [session, loading] = useSession();

  const variants = {
    hovered: {scale: 1.5},
    nonHovered: {scale: 1}
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.landing}>
      <div className={styles.center}>
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
        <div className={styles.twitterFeed}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="YalobushaSO"
              options={{height: 400}}
              noFooter
              noHeader
            />
            <div className={styles.twitterFollowButton}>
            <TwitterFollowButton
                screenName={'YalobushaSO'}
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default index


