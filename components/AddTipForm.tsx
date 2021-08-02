import { useForm } from 'react-hook-form';
import styles from '../styles/tips.module.css'

interface AddTipFormProps {
    onSubmit: any;
}

const AddTipForm = (props: AddTipFormProps) => {

    const {handleSubmit} = useForm();
    return (
        <form onSubmit={handleSubmit(props.onSubmit)} className={styles.body}>
            <div className={styles.inputDiv}>
                <label htmlFor="description" className={styles.label}>Description</label>
                <input id="description" name="description" type="text" required className={styles.input}/>
            </div>
            <div className={styles.inputDiv}>
                <label htmlFor="offenseType" className={styles.label}>Offense Type</label>
                <select name="offenseType" id="offenseType" required className={styles.input}>
                    <option value="arson">Arson</option>
                    <option value="assault">Assault</option>
                    <option value="burglary">Burglary</option>
                    <option value="childAbuse">Child Abuse/Neglect</option>
                    <option value="childSexualImages">Child Sexual Images</option>
                    <option value="civilIssue">Civil Issue</option>
                    <option value="computerCrimes">Computer Crimes</option>
                    <option value="covid19">COVID-19</option>
                    <option value="criminalMischief">Criminal Mischief</option>
                    <option value="criminalTrespass">Criminal Trespass</option>
                    <option value="disorderlyConduct">Disorderly Conduct</option>
                    <option value="dogBite">Dog Bite</option>
                    <option value="elderAbuse">Elder Abuse / Neglect</option>
                    <option value="forgery">Forgery</option>
                    <option value="harassment">Harassment</option>
                    <option value="homicide">Homicide</option>
                    <option value="indecentExposure">Indecent Exposure</option>
                    <option value="missingPerson">Missing Person</option>
                    <option value="motorVehicleOffense">Motor Vehicle Offenses</option>
                    <option value="noiseComplaint">Noise Complaint</option>
                    <option value="paroleViolation">Parole Violation</option>
                    <option value="policeInformation">Police Information</option>
                    <option value="prostitution">Prositution</option>
                    <option value="publicPeaceOffense">Public Peace Offenses</option>
                    <option value="robbery">Robbery</option>
                    <option value="sexualAssault">Sexual Assault</option>
                    <option value="suspiciousActivity">Suspicious Activity</option>
                    <option value="terrorism">Terrorism</option>
                    <option value="theft">Theft</option>
                    <option value="underageDrinking">Underage Drinking Party</option>
                    <option value="vehicleTheft">Vehicle Theft</option>
                    <option value="wantedPerson">Wanted Person</option>
                    <option value="weapons">Weapons</option>
                </select>
            </div>
            <div className={styles.inputDiv}>
            <label htmlFor="address" className={styles.label}>Address of Incident</label>
            <input id="address" name="address" type="text" className={styles.input} />
            </div>
            <div className={styles.inputDiv}>
            <label htmlFor="intersection" className={styles.label}>Nearest Intersection</label>
            <input id="intersection" name="intersection" type="text" className={styles.input} />
            </div>
            <div className={styles.inputDiv}>
            <label htmlFor="neighborhood" className={styles.label}>Neighborhood / Subdivision</label>
            <input id="neighborhood" name="neighborhood" type="text" className={styles.input} />
            </div>
            <div className={styles.inputDiv}>
            <label htmlFor="references" className={styles.label}>Links to any online news stories you are reporting in reference to. (copy/paste the URL if possible)</label>
            <input id="references" name="references" type="text" className={styles.input}/>
            </div>
            <button type="submit">Submit Tip</button>
        </form>
    )
}

export default AddTipForm
