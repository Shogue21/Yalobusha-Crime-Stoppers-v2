import '../styles/styles.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'



export default function MyApp({ Component, pageProps }) {
  return <div>
  <Head> 
    <title>Yalobusha County Crime Stoppers</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
    <meta name="HandheldFriendly" content="true"></meta>
  </Head>
  
  <Navbar />
  
  <Component {...pageProps} />
  <Footer />
</div>
}