import Image from "next/image";
import Link from "next/link";
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="Pokenext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
