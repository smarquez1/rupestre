import Head from "next/head"
import PropTypes from "prop-types"
import "../styles/globals.css"
// Import styles from '../styles/Home.module.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="flexflex-wrap content-end">
      <Head>
        <title>Rupestre</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rupestre: huevos de hormigón" />

        {/* <!-- OG: 2.7.6 --> */}
        <meta property="og:url" content="https://rupestrehuevos.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rupestre Huevos" />
        <meta property="og:description" content="Rupestre: huevos de hormigón" />
        <meta property="og:image" content="/apple-touch-icon.png" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
      {/* <footer> </footer> */}
    </div>
  )
}

MyApp.propTypes = { Component: PropTypes.object, pageProps: PropTypes.func }

export default MyApp
