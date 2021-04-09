import Link from 'next/link'
import styles from './Information.module.scss'

function Information() {
    return (
        <section className={styles.hero}>
        <div className={styles.container}>
           <div className={styles.imageWrapperFeatures}>
              <img src="/Illustration-2.png" />
           </div>

           <div className={styles.textWrapperFeatures}>
              <h3>We Provide Many Features You Can Use</h3>
              <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
           <ul className={styles.listFeatures}>
                 <li>
                    <img className={styles.imageFeatures} src="/checkmark.svg" />
                    Powerfull online protection.
                 </li>
                 <li>
                    <img className={styles.imageFeatures} src="/checkmark.svg" />
                    Internet without borders.
                 </li>
                 <li>
                    <img className={styles.imageFeatures} src="/checkmark.svg" />
                    Supercharged VPN.
                 </li>
                 <li>
                    <img className={styles.imageFeatures} src="/checkmark.svg" />
                    No specific time limits.
                 </li>
              </ul>
           </div>
        </div>
     </section>
    );
}

export default Information; 