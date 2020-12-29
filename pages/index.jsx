import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        <Image src="/rupestre-logo-v4.png" alt="rupestre-logo" height={682} width={2000} />
      </h1>
      {/* <p className={styles.description}> </p> */}
    </div>
  )
}
