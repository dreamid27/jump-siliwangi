import styles from "./features.module.css";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles["row-column"]}>
        <div className={styles.column}>
          <img src="/user.png"></img>
          <div className={styles["text-col"]}>
            <h1>90+</h1>
            <p>Users</p>
          </div>
        </div>
        <div className={styles.columnMid}>
          <img src="/location.png"></img>
          <div className={styles["text-col"]}>
            <h1>30+</h1>
            <p>Locations</p>
          </div>
        </div>
        <div className={styles.column}>
          <img src="/server.png"></img>
          <div className={styles["text-col"]}>
            <h1>50+</h1>
            <p>Servers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
