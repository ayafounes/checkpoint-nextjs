import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
