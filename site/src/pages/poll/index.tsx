import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { NavBar } from '@/components'

export default function Poll() {
  return (
    <>
      <Head>
        <title>Create Poll</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <h1>Create Poll</h1>
    </>
  )
}
