import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import { useRouter } from 'next/router'

export default function Poll() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Take Poll</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Take Poll {id}</h1>
    </>
  )
}
