import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tracker</title>
      </Head>

      <main>
        <h1>
          Hello World!
        </h1>
      </main>
    </div>
  )
}

export default Home
