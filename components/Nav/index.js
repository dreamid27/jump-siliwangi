import styles from "./Navbar.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/Logo.svg" alt="LasslesVPN"></img>
        </a>
      </Link>
      <ul className={styles["nav-links"]}>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Features</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Help</a>
          </Link>
        </li>
      </ul>
      <div className={styles["nav-links-cta"]}>
        <Link href="/">
          <a className={styles["link-sm"]}>Sign In</a>
        </Link>
        <button className={styles["cta-red"]}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Nav;
