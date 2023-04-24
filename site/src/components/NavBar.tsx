import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/components/NavBar.module.css"

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <a href="/">
        <div className={styles.NavTitle}>
            <Image src="/Pogchamp.png" alt="The PogPoll logo, which is picture of a man making a funny face" width={50} height={50}/>
            <h1>PogPoll</h1>
        </div>
      </a>
      <ul className={styles.NavLinks}>
        <li>
          <Link href="/login">Login</Link> 
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  )
}