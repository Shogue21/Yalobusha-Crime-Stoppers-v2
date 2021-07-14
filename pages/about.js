import Head from 'next/head'

import styles from '../styles/about.module.css'

export default function AboutUs() {
    return (
      <div className="d-flex flex-column">
        <div className={styles.about}>
          <div className={styles.aboutHeader}>
            <h1>About Us</h1>
          </div>
          <div className={styles.aboutContent}>
            <p>
              Our Crime Stoppers program works closely
              with all area media in issuing press releases,
              providing photos of wanted fugitives, and
              suggesting story ideas for newscasts and
              print. Crime Stoppers is an invaluable asset
              to the community in the fight against crime in
              that it gives citizens a safe, secure means to
              give information that may help solve crimes.
          </p>
          </div>
        </div>
        <div className={`${styles.HIW}`}>
          <div className={styles.HIWHeader}>
            <h1>Tip Process</h1>
          </div>
          <div className={styles.HIWContent}>
            <p>
              If you've seen suspicious activity, or
              know that a crime has been committed,
              simply call 473-4935 or 1-866-933-
              TIPS (8477). You don't have to give
              your name! An operator will take your
              information and assign you a code
              number. If an arrest is made, you call
              Crime Stoppers again, provide your
              code number, and a reward may be paid
              - no questions asked!
              The operator will give instructions about
              how to collect your cash reward. You
              never have to reveal your identity or
              sign any receipts.
          </p>
          </div>
        </div>
        <div className={styles.WYSC}>
          <div className={styles.WYSCHeader}>
            <h1>Why You Should Call</h1>
          </div>
          <div className={styles.WYSCContent}>
            <p>
              Yalobusha County Crime Stoppers breaks
              through the barriers. Callers remain
              completely anonymous.<strong> “Better to have anonymous
              information than no information at all.” </strong>
              The offering of cash rewards crosses the
              barrier of apathy. Although many people
              refuse rewards, the availability of cash is an
              incentive to many callers who may not have
              otherwise given information.
            </p>
          </div>
        </div>
      </div>
    )
  }

