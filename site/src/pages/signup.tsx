import Head from 'next/head'
import styles from '@/styles/AuthForm.module.css'
import { FormEvent, useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Main}>
        <div className={styles.Content}>
          <h1>Sign Up</h1>
          <form className={styles.Form} onSubmit={e => handleSubmit(e)}>
            <fieldset className={styles.Field}>
              <label htmlFor="email">Email</label>
              <input 
                name="email" type="text" value={email} 
                onChange={e => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className={styles.Field}>
              <label htmlFor="username">Username</label>
              <input 
                name="username" type="text" value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </fieldset>
            <fieldset className={styles.Field}>
              <label htmlFor="password">Password</label>
              <input
                name="password" type="password" value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </fieldset>
            <input type="submit" value="Sign Up"></input>
          </form>
          <button>Sign in with Google</button>
        </div>
      </main>
    </>
  )
}
