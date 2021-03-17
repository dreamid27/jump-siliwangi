import Link from 'next/link'
import styles from './Main.module.scss'

function MainContent() {
    return (
        <section className={styles.hero}>
        <div className={styles.container}>
           <div className={styles.textWrapper}>
              <h1 className={styles.textTitle}>Want anything to be easy with <b>LaslesVPN</b>.</h1>
              <p className={styles.description}>Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.</p>

              <Link href="/contact"><a className={styles.cta}>Get Started</a></Link>
           </div>

           <div className={styles.imageWrapper}>
              <img src="/Illustration-1.png" />
           </div>
        </div>
     </section>
    );
}

export default MainContent; 