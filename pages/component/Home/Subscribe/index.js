import styles from './Subscribe.module.css'

function Subscribe() {
    return (
        <div className={styles.subscribe}>
          <div className={styles.subscribeLeft}>
            <h1>
              Subscribe Now for Get Special Features!
            </h1>
            <p>
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <div className={styles.subscribeRight}>
            <button className={styles.btnSub} type="button">Subscribe Now</button>
          </div>
        </div>
    );
}

export default Subscribe;