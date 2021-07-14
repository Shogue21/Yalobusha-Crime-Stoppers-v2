import '../styles/styles.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'


import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('bootstrap/dist/js/bootstrap'),
  { ssr: false }
)


typeof window !== 'undefined'
export default function MyApp({ Component, pageProps }) {
  return <div>
  <Head> 
    <title>Yalobusha County Crime Stoppers</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
    <meta name="HandheldFriendly" content="true"></meta>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </Head>
  
  <Navbar />
  
  <Component {...pageProps} />
  <Footer />
</div>
}