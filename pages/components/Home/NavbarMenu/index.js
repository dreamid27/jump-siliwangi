import Link from "next/link";
import styles from "./Navbar.module.scss";
import Logo from "@public/logo.png";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/features">
            <a>Features</a>
          </Link>
        </li>
        <li>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/testimonial">
            <a>Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href="/help">
            <a>Help</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/signin">
            <a className={styles.signInItem}>Sign In</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a className={styles.signUpItem}>Sign Up</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;