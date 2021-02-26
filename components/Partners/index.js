import styles from "./partners.module.css";

const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={styles["partners-heading"]}>
        <h1>
          Huge Global Network<br></br>of Fast VPN
        </h1>
        <p>
          See <span>LaslesVPN</span> everywhere to make it easier for you when
          you move<br></br>locations.
        </p>
      </div>
      <div className={styles["partners-img"]}>
        <img src="/global.png" alt="" />
      </div>
      <div className={styles["partners-company"]}>
        <img src="netflix.png" alt="" />
        <img src="reddit.png" alt="" />
        <img src="amazon.png" alt="" />
        <img src="discord.png" alt="" />
        <img src="spotify.png" alt="" />
      </div>
    </section>
  );
};

export default Partners;
