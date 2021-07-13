import '../styles/styles.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'



export default function MyApp({ Component, pageProps }) {
  return <div>
  <Head> 
    <title>Yalobusha County Crime Stoppers</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
    <meta name="HandheldFriendly" content="true"></meta>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous"></script>
  </Head>
  
  <Navbar />
  
  <Component {...pageProps} />
  <Footer />
</div>
}