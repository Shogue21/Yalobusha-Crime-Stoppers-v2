import styles from '../styles/footer.module.css'
import { useState } from "react"

const Footer = () => {
        const [isHovered, setIsHovered] = useState(false);
        
        const openEnvelope = () => {
            
            return <a href="us@gmail.com"><box-icon  size="lg" border="circle" name='envelope-open' onMouseLeave={() => {setIsHovered(false)}}></box-icon></a>
        }
        const closeEnvelope = () => {
            
            return <box-icon   size="lg" id="envelope" name='envelope' border="circle" onMouseOver={() => {setIsHovered(true)}}></box-icon>
        }
    return (
        <footer className={styles.footer}>
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
     
            <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
             
            <h1>Yalobusha Crime Stoppers</h1>
            <h2>Submit a Tip</h2>
            <div className={styles.call}>
            <div >
            <a className={styles.icons} href="tel:5555555555"><i class='bx bx-phone-call bx-tada-hover'></i></a>
            
            {/* {isHovered && openEnvelope()}
            {!isHovered && closeEnvelope()} */}
            </div>
            <h2 className={styles.paragraph}>Call: 555-555-5555</h2>
            </div>



        </footer>
    )
}

export default Footer
