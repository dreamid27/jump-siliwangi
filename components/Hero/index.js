import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["column-text-heading"]}>
        <h1 className={styles["hero-heading"]}>
          Want anything to be <br></br> easy with <span>LaslesVPN.</span>
        </h1>
        <p className={styles["text-p"]}>
          Provide a network for all your needs with ease and fun using{" "}
          <strong>LaslesVPN</strong> <br></br>discover interesting features from
          us.
        </p>
        <button className={styles["btn-secondary"]}>Get Started</button>
      </div>
      <div>
        <img className={styles["illustration-hero"]} src="/illust.png"></img>
      </div>
    </section>
  );
};

export default Hero;
