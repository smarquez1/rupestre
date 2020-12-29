import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rupestre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image src="/rupestre-logo-v4.png" alt="rupestre-logo" height={682} width={2000} />
        </h1>
        {/* <p className={styles.description}> </p> */}
      </main>

      {/* <footer className={styles.footer}> </footer> */}
    </div>
  )
}