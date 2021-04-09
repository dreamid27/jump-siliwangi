import Link from "next/link";
import styles from "./Customer.module.scss";

function CustomerSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.network}>
        <h1 className={styles.networkTitle}>
          Huge Global Network
          <br />
          of Fast VPN
        </h1>
        <p className={styles.networkDescription}>
          See <b>LaslesVPN</b> everywhere to make it easier for you when you
          move locations.
        </p>
        <img className={styles.imageNetwork} src="/Illustration-4.png" />
      </div>

      <div className={styles.sponsor}>
        <img className={styles.netflix} src="/Sponsor-1.png" />
        <img className={styles.reddit} src="/Sponsor-2.png" />
        <img className={styles.amazon} src="/Sponsor-3.png" />
        <img className={styles.discord} src="/Sponsor-4.png" />
        <img className={styles.spotify} src="/Sponsor-5.png" />
      </div>
    </section>
  );
}

export default CustomerSection;