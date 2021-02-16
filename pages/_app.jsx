import Head from "next/head"
import PropTypes from "prop-types"

// import "bulma/css/bulma.css";
import "styles/globals.scss"
import Footer from "components/common/Footer"
import Navbar from "components/common/Navbar"

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
      </Head>

      <body className="has-navbar-fixed-top">
        <Navbar />
        <section class="section">
          <div class="container">
            <Component {...pageProps} />
          </div>
        </section>
        <Footer />
      </body>
    </div>
  )
}

MyApp.propTypes = { Component: PropTypes.object, pageProps: PropTypes.func }

export default MyApp
