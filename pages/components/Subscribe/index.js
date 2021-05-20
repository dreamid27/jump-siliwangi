import styles from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <div className={styles["subs-heading"]}>
        <h1>
          Subscribe Now for<br></br>
          Get Special Features!
        </h1>
        <p>Let's subscribe with us and find the fun.</p>
      </div>
      <div className={styles["subs-btn"]}>
        <button>Subscribe Now</button>
      </div>
    </section>
  );
};

export default Subscribe;
