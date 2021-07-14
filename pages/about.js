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
        <h1>Why Do We Need Crime Stoppers?</h1>
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
        <p>
          <strong>
          If your information leads to an arrest,
          you could receive a reward of up to
          $1,000.
          </strong>
        </p>
      </div>
      <div className={styles.Whyshouldyoucallcontent}>
      <p className>
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
    </div>
    </html>
    )
  }

