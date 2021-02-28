import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles["pricing-heading"]}>
        <h1>Choose Your Plan</h1>
        <p>
          Let's choose the package that is best for you and explore it happily
          and <br></br>cheerfully.
        </p>
      </div>
      <div className={styles["row-pricing-card"]}>
        <div className={styles["pricing-card"]}>
          <div className={styles["pricing-img"]}>
            <img src="/price.png"></img>
            <h3>Free Plan</h3>
          </div>
          <div className={styles["pricing-description"]}>
            <p>
              <img src="jam_check.png" />
              Unlimited Bandwitch
            </p>
            <p>
              <img src="jam_check.png" />
              Encrypted Connection
            </p>
            <p>
              <img src="jam_check.png" />
              No Traffic Logs
            </p>
            <p>
              <img src="jam_check.png" />
              Works on All Devices
            </p>
          </div>
          <div className={styles["pricing-button"]}>
            <h3>Free</h3>
            <button className={styles["btn-pricing"]}>Select</button>
          </div>
        </div>
        <div className={styles["pricing-card"]}>
          <div className={styles["pricing-img"]}>
            <img src="/price.png"></img>
            <h3>Standard Plan</h3>
          </div>
          <div className={styles["pricing-description"]}>
            <p>
              <img src="jam_check.png" />
              Unlimited Bandwitch
            </p>
            <p>
              <img src="jam_check.png" />
              Encrypted Connection
            </p>
            <p>
              <img src="jam_check.png" />
              Yes Traffic Logs
            </p>
            <p>
              <img src="jam_check.png" />
              Works on All Devices
            </p>
            <p>
              <img src="jam_check.png" />
              Connect Anywhere
            </p>
          </div>
          <div className={styles["pricing-button"]}>
            <h3>
              $9 <span>/ mo</span>
            </h3>
            <button className={styles["btn-pricing"]}>Select</button>
          </div>
        </div>
        <div className={styles["pricing-card"]}>
          <div className={styles["pricing-img"]}>
            <img src="/price.png"></img>
            <h3>Premium Plan</h3>
          </div>
          <div className={styles["pricing-description"]}>
            <p>
              <img src="jam_check.png" />
              Unlimited Bandwitch
            </p>
            <p>
              <img src="jam_check.png" />
              Encrypted Connection
            </p>
            <p>
              <img src="jam_check.png" />
              Yes Traffic Logs
            </p>
            <p>
              <img src="jam_check.png" />
              Works on All Devices
            </p>
            <p>
              <img src="jam_check.png" />
              Connect Anywhere
            </p>
            <p>
              <img src="jam_check.png" />
              Get New Features
            </p>
          </div>
          <div className={styles["pricing-button"]}>
            <h3>
              $12 <span>/ mo</span>
            </h3>
            <button className={styles["btn-pricing"]}>Select</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
