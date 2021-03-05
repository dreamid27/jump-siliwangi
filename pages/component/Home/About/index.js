import styles from './About.module.css'

function About() {
  return (
    <div className={styles.aboutWrap}>
      <div className={styles.aboutLeft}>
        <h1>
          Want anything to be easy with <span>LaslesVPN.</span>
        </h1>
        <p>
          Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.
            </p>
        <button className={styles.btn} type="button"> Get Started </button>
      </div>
      <div className={styles.aboutRight}>
        <img src="/Illustration1.png" alt="Illustration1"></img>
      </div>
    </div>
  );
}

export default About;