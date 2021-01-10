import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Board from '../components/Board'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Darkboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Board />
      </main>
    </div>
  )
}

// Pages that are statically optimized by Automatic Static Optimization will be hydrated without their route parameters provided, i.e query will be an empty object ({}).
Home.getInitialProps = async () => {
  return {}
}

export default Home
