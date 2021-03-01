import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-heading"]}>
        <Link href="/">
          <a>
            <img src="/Logo.svg" alt="LasslesVPN"></img>
          </a>
        </Link>
        <h2>
          <span>LaslesVPN</span> is a private virtual network that<br></br>
          has unique features and has high security.
        </h2>
        <ul className={styles["social-media"]}>
          <li>
            <Link href="/">
              <a className={styles.fb}></a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.twt}></a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.ig}></a>
            </Link>
          </li>
        </ul>
        <h3>
          &copy;2020Lasles<span>VPN</span>
        </h3>
      </div>
      <div className={styles["footer-body"]}>
        <div className={styles.left}>
          <h3>Product</h3>
          <ul className={styles.product}>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Locations</a>
            </li>
            <li>
              <a>Server</a>
            </li>
            <li>
              <a>Countries</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className={styles.mid}>
          <h3>Engage</h3>
          <ul className={styles.engage}>
            <li>
              <a>LaslesVPN</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Tutorials</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <h3>Earn Money</h3>
          <ul className={styles.earn}>
            <li>
              <a>Affiliate</a>
            </li>
            <li>
              <a>Become Partner</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
