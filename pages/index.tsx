import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Board from '../components/Board'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Board />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

// Pages that are statically optimized by Automatic Static Optimization will be hydrated without their route parameters provided, i.e query will be an empty object ({}).
Home.getInitialProps = async () => {
  return {}
}

export default Home
