import { useForm } from 'react-hook-form';
import styles from '../styles/tipsubmit.module.css'

interface AddTipFormProps {
    onSubmit: any;
}

const AddTipForm = (props: AddTipFormProps) => {

    const {handleSubmit} = useForm();
    return (
        <div className={styles.cardForm}>
        <div className={styles.container}>
        <form onSubmit={handleSubmit(props.onSubmit)} className={styles.body}>
            <br />
            <label htmlFor="offenseType" className={styles.labels}>Offense Type</label>
            <select name="offenseType" id="offenseType" required>
                <option value="Arson">Arson</option>
                <option value="Assault">Assault</option>
                <option value="Burglary">Burglary</option>
                <option value="Child Abuse/Neglect">Child Abuse/Neglect</option>
                <option value="Child Sexual Images">Child Sexual Images</option>
                <option value="Civil Issue">Civil Issue</option>
                <option value="Computer Crimes">Computer Crimes</option>
                <option value="Covid-19">COVID-19</option>
                <option value="Criminal Mischief">Criminal Mischief</option>
                <option value="Criminal Trespass">Criminal Trespass</option>
                <option value="Disorderly Conduct">Disorderly Conduct</option>
                <option value="Dog Bite">Dog Bite</option>
                <option value="Elder Abuse">Elder Abuse / Neglect</option>
                <option value="Forgery">Forgery</option>
                <option value="Harassment">Harassment</option>
                <option value="Homicide">Homicide</option>
                <option value="Indecent Exposure">Indecent Exposure</option>
                <option value="Missing Person">Missing Person</option>
                <option value="Motor Vehicle Offense">Motor Vehicle Offenses</option>
                <option value="Noise Complaint">Noise Complaint</option>
                <option value="Parole Violation">Parole Violation</option>
                <option value="Police Information">Police Information</option>
                <option value="Prostitution">Prositution</option>
                <option value="Public Peace Offense">Public Peace Offenses</option>
                <option value="Robbery">Robbery</option>
                <option value="Sexual Assault">Sexual Assault</option>
                <option value="Suspicious Activity">Suspicious Activity</option>
                <option value="Terrorism">Terrorism</option>
                <option value="Theft">Theft</option>
                <option value="Underage Drinking">Underage Drinking Party</option>
                <option value="Vehicle Theft">Vehicle Theft</option>
                <option value="Wanted Person">Wanted Person</option>
                <option value="Weapons">Weapons</option>
            </select>
            <br />
            <label htmlFor="address" className={styles.labels}>Address of Incident</label>
            <input id="address" name="address" type="text" />
            <br />
            <label htmlFor="intersection" className={styles.labels}>Nearest Intersection</label>
            <input id="intersection" name="intersection" type="text" />
            <br />
            <label htmlFor="neighborhood" className={styles.labels}>Neighborhood / Subdivision</label>
            <input id="neighborhood" name="neighborhood" type="text" />
            <br />
            <label htmlFor="references" className={styles.labels}>Links to any online news stories you are reporting in reference to. (copy/paste the URL if possible)</label>
            <input id="references" name="references" type="text" />
            <br />
            <label htmlFor="description" className={styles.DescriptionLabel}>Description</label>
            <textarea id="description" name="description" required className={styles.DescriptionInput}/>
            <br />
            <button type="submit" className={styles.button}>Submit Tip</button>
        </form>
        </div>
</div>
    )
}

export default AddTipForm
