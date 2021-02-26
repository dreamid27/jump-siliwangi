import styles from "./wrapper.module.css";

const Wrapper = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles["img-wrapper"]}>
        <img src="/person.png"></img>
      </div>
      <div className={styles["text-wrapper"]}>
        <h1>
          We Provide Many<br></br>
          Features You Can Use
        </h1>
        <p className={styles["text-info"]}>
          You can explore the features that we provide with fun<br></br>
          and have their own functions each feature.
        </p>
        <div className={styles["wrapper-feature"]}>
          <p>
            <img src="/ceklis.png" />
            Powerfull online protection.
          </p>
          <p>
            <img src="/ceklis.png" />
            Internet without borders.
          </p>
          <p>
            <img src="/ceklis.png" />
            Supercharged VPN.
          </p>
          <p>
            <img src="/ceklis.png" />
            No specific time limits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
