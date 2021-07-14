import Head from 'next/head'

import styles from '../styles/about.module.css'

export default function AboutUs() {
    return (
      <html className={styles.html}>
        <div className={styles.container}>
       <Head>
         <title>About Us</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>

    <body className={styles.body}>
      <div className={styles.contentContainer}>
      <div className={styles.AboutUs}>
        <h1>About Us</h1>
      </div>
      <div className={styles.TipProcess}>
        <h1>Tip Process</h1>
      </div>
      <div className={styles.WhyshouldIcall}>
        <h1>Why should I call?</h1>
        <h3 className={styles.submitTipHeader}>How do I submit a tip? </h3>
      </div>
      <div className={styles.AboutUsContent}>
      <p>
        Yalobusha County Crime Stoppers
        encourages members of the community to
        assist local law enforcement agencies in the
        fight against crime by overcoming the two key
        elements that inhibit community involvement -
        fear and apathy. Callers
        remain anonymous and are eligible to receive
        a cash reward if the information given leads to
        an arrest or grand jury indictment of a felony
        offender.
        </p>
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
      <div className={styles.TipProcessContent}>
        <p>
        First you should know that you remain completley anonymous and are eligible to receive a cash reward if the information given leads to an arrest or grand jury indictment of a felony offender.
        Second you should know that you can submit a tip to Yalobusha County Crime Stoppers by calling the tip line at bottom of the page. Here you will be conntected to a call center. They will ask you for only information that is necessary to complete the tip.
        They will give you a number and if the tip you submit leads to an arrest of a felony offender, you can call back with the number you were given previously and go about collecting your reward. 
        </p>
        <p>
          <strong>
            Rewards range from $300 to $1,000. This is based on the severity of the crime.
          </strong>
        </p>
      </div>
      <div className={styles.Whyshouldyoucallcontent}>
      <p className>
          You'll help protect your loved ones and community from crimes.
        </p>
      </div>
      </div>
    </body>
    </div>
    </html>
    )
  }

