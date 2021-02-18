import Head from "next/head"
import PropTypes from "prop-types"

import Footer from "components/common/Footer"
import Navbar from "components/common/Navbar"

import "styles/globals.scss"
import "styles/Header.scss"

const MyApp = ({ Component, pageProps }) => {
  const description = "Rupestre: vasijas ovoides"
  const title = "Rupestre"

  return (
    <div className="flexflex-wrap content-end">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!-- OG: 2.7.6 --> */}
        <meta property="og:url" content="https://rupestrehuevos.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </Head>

      <body>
        {/* <body className="has-navbar-fixed-top"> */}
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </body>
    </div>
  )
}

MyApp.propTypes = { Component: PropTypes.object, pageProps: PropTypes.func }

export default MyApp
