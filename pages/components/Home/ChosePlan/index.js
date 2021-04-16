import Link from "next/link";
import styles from "./Chose.module.scss";

function ChosePlan() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
      <div className={styles.pricing}>
        <h1 className={styles.pricingTitle}>Choose Your Plan</h1>
        <p className={styles.pricingDescription}>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>

      <div className={styles.wrapperCard}>
        <div className={styles.card}>
          <div className={styles.cards}>
          <div className={styles.cardTitle}>
            <img className={styles.imagePricing} src="/Illustration-3.png" />
            <h3>Free Plan</h3>
          </div>
          <div className={styles.cardDescription}>
            <ul>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Unlimited Bandwitch
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Encrypted Connection
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                No Traffic Logs
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Works an All Devices
              </li>
            </ul>
          </div>
          </div>
          <div className={styles.cardAction}>
            <h1><b>Free</b></h1>
            <button type="button">Select</button>
          </div>
        
        </div>

        <div className={styles.card}>
        <div className={styles.cards}>
          <div className={styles.cardTitle}>
            <img className={styles.imagePricing} src="/Illustration-3.png" />
            <h3>Standart Plan</h3>
          </div>
          <div className={styles.cardDescription}>
            <ul>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Unlimited Bandwitch
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Encrypted Connection
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Yes Traffic Logs
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Works an All Devices
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Connect Anywhere
              </li>
            </ul>
          </div>
          </div>
          <div className={styles.cardAction}>
            <h1><b>$9</b> / mo</h1>
            <button type="button">Select</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cards}>
          <div className={styles.cardTitle}>
            <img className={styles.imagePricing} src="/Illustration-3.png" />
            <h3>Premium Plan</h3>
          </div>
          <div className={styles.cardDescription}>
            <ul>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Unlimited Bandwitch
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Encrypted Connection
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Yes Traffic Logs
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Works an All Devices
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Connect Anywhere
              </li>
              <li>
                <img className={styles.imageListPricing} src="/checkmark2.svg" />
                Get New Features
              </li>
            </ul>
          </div>
          </div>
          <div className={styles.cardAction}>
            <h1><b>$12</b> / mo</h1>
            <button type="button">Select</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ChosePlan;
