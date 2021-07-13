import Head from 'next/head'

import styles from '../styles/about.module.css'

export default function AboutUs() {
    return (
        <div className={styles.container}>
       <Head>
         <title>About Us</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>

    <body className={styles.body}>
      <div>
          <h1 className={styles.h1}>About Us</h1>
      </div>
      <div>
        <p className={styles.content}>
        Yalobusha County Crime Stoppers
        encourages members of the community to
        assist local law enforcement agencies in the
        fight against crime by overcoming the two key
        elements that inhibit community involvement -
        fear and apathy.  Crime Stoppers provides a
        telephone number and Web Tips to encourage
        citizens in the community to volunteer vital
        information helpful to law enforcement
        agencies to fight against crime.  Callers
        remain anonymous and are eligible to receive
        a cash reward if the information given leads to
        an arrest or grand jury indictment of a felony
        offender.
        </p>
        
        <p className={styles.content}>
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
      
      <div>
        <h1 className={styles.h1}>Tip Process</h1>
        <h3 className={styles.howTo}>How do I submit a tip? </h3>
        <p className={styles.content}>
        First you should know that you remain completley anonymous and are eligible to receive a cash reward if the information given leads to an arrest or grand jury indictment of a felony offender.
        Second you should know that you can submit a tip to Yalobusha County Crime Stoppers by calling the tip line at bottom of the page. Here you will be conntected to a call center. They will ask you for only information that is necessary to complete the tip.
        They will give you a number and if the tip you submit leads to an arrest of a felony offender, you can call back with the number you were given previously and go about collecting your reward. 
        </p>
        <p>
        Rewards range from $500 to $1,000. This is based on the severity of the crime.
        </p>
      </div>
      <div>
      <h1 className={styles.h1}>
        Why should I call?
      </h1>
        <p className={styles.content}>
          You'll help protect your loved ones and community from crimes.
        </p>
      </div>
    </body>
    </div>
    )
  }

