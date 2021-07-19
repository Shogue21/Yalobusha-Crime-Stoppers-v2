import Head from 'next/head'

import styles from '../styles/about.module.css'

export default function AboutUs() {
    return (
      <body className={styles.body}>
      <div className={styles.container}>
          <h1 className={styles.AboutHeader}>About Us</h1>
            <div className={styles.content}>
              <p>
                Yalobusha County Crime Stoppers
                encourages members of the community to
                assist local law enforcement agencies in the
                fight against crime by overcoming the two key
                elements that inhibit community involvement -
                fear and apathy.  Crime Stoppers provides a
                telephone number and Web Tips to encourage
                citizens in the community to volunteer vital
                information helpful to law enforcement
                agencies to fight against crime.  Callers
                remain anonymous and are eligible to receive
                a cash reward, if the information given leads to
                an arrest and a grand jury indictment of a felony
                offender.
              </p>
              <p>
                The Yalobusha County Crime Stoppers “hotline”
                is a vital resource in helping reduce crime in our
                community. With its triangle of cooperation
                between the citizens, the media and law
                enforcement, Yalobusha County Crime Stoppers
                is dedicated to putting criminals behind bars
                while building a foundation of trust and support.
                The goal of Yalobusha County Crime Stoppers is
                to make the streets safer for our families and
                neighborhoods.
              </p>
            </div>
        
          <h1 className={styles.HIWHeader}>Tip Process</h1>
          <div className={styles.content}>
          <p>
              If you've seen suspicious activity, or
              know that a crime has been committed,
              simply call 1-866-933-
              TIPS (8477). You don't have to give
              your name! An operator will take your
              information and assign you a code
              number. If an arrest is made, you call
              Crime Stoppers again, provide your
              code number, and a reward will be paid
              - no questions asked!
              The operator will give instructions about
              how to collect your cash reward. You
              never have to reveal your identity or
              sign any receipts.
            </p>
            <p>
              <strong>
              Rewards range from $300 to $1,000. This is based on the severity of the crime.
              If your information leads to an arrest,
              you could receive a reward of up to
              $1,000.
              </strong>
            </p>
        
          </div>
          <h1 className={styles.WYSCHeader}>Why You Should Call</h1>
          <div className={styles.content}>
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
      </body> 
    )
  }

