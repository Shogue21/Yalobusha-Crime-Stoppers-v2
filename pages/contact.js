import styles from "../styles/contact.module.css"
import { useState } from "react"

const contact = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    const openEnvelope = () => {
        
        return <a href="us@gmail.com"><box-icon  size="lg" border="circle" name='envelope-open' onMouseLeave={() => {setIsHovered(false)}}></box-icon></a>
    }
    const closeEnvelope = () => {
        
        return <box-icon   size="lg" id="envelope" name='envelope' border="circle" onMouseOver={() => {setIsHovered(true)}}></box-icon>
    }

    return (
        
        <div>
            <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
            
            <h1>Submit A Tip!</h1>
            <h3>Contact Us</h3>
            <div className={styles.icons}>
            <a href="tel:5555555555"><box-icon  size="lg" name='phone-call' border="circle" animation="tada-hover"></box-icon></a> 
            {isHovered && openEnvelope()}
            {!isHovered && closeEnvelope()}
            </div>
            <h4>Call: 555-555-5555</h4>
            <h4>Email: us@gmail.com</h4>
            <h4>Located at: 123 Main Street</h4>
        

        </div>
    )
}

export default contact
