import Head from 'next/head'

import styles from '../styles/about.module.css'

export default function AboutUs() {
    return (
        <div className={styles.container}>
       <Head>
         <title>About Us</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>

    <body>
      <div className="about-us">
          <h1 className={styles.h1}>About Us</h1>
      </div>
      <div className={styles.AboutUsContent}>
        <p>
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
      
      <div className={styles.tipProcess}>
        <h1 className={styles.h1}>Tip Process</h1>
        <h3 className={styles.howTo}>How do I submit a tip? </h3>
        <p>
        First you should know that you remain completley anonymous and are eligible to receive a cash reward if the information given leads to an arrest or grand jury indictment of a felony offender.
        Second you should know that you can submit a tip to Yalobusha County Crime Stoppers by calling the tip line at bottom of the page. 
        </p>
      </div>
      <div className={styles.community}>
      <h1 className={styles.h1}>
        Why should I call?
      </h1>
        <p>
          It can help to protect you, your loved ones and community from future crimes
        </p>
      </div>
    </body>
    </div>
    )
  }

