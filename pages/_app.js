import '../styles/styles.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'next-auth/client'
import { motion, AnimatePresence } from "framer-motion"

typeof window !== 'undefined'
export default function MyApp({ Component, pageProps, router }) {
  
  return <div>
  <Head> 
    <title>Yalobusha County Crime Stoppers</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
    <meta name="HandheldFriendly" content="true"></meta>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </Head>
  
  <Provider session={pageProps.session}>
    <AnimatePresence>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
      pageInitial: {
        opacity: 0,
      },
      pageAnimate: {
        opacity: 1,
        transition: {
          duration: 2
        }
      },
      pageExit: {
        opacity: 0,
        transition: {
          duration: 0.6
        }
      }
    }}>
    <Navbar />
     <Component {...pageProps} />
    <Footer />
    </motion.div>
    </AnimatePresence>
  </Provider>
</div>
}