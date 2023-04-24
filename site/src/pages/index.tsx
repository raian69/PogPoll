import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { NavBar } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>PogPoll</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main>
        <h1>PogPoll</h1>
        <p>A web application for polls with observable real time results. Made with streamers in mind.</p>
        <p>NOTE: add gifs or visualizations of these real time graphs on the landing page</p>
      </main>
    </>
  )
}
