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
              <h1 className={styles.textTitleFeatures}>We Provide Many Features You Can Use</h1>
              <p className={styles.descriptionFeatures}>You can explore the features that we provide with fun and have their own functions each feature.</p>
           <div className={styles.listFeatures}>
                 <li>
                    <img className={styles.imageFeatures} src="/check-circle.svg" />
                    <p className={styles.descListFeatures}>Powerfull online protection.</p>
                 </li>
                 <li>
                    <img className={styles.imageFeatures} src="/check-circle.svg" />
                    <p className={styles.descListFeatures}>Internet without borders..</p>
                 </li>
                 <li>
                    <img className={styles.imageFeatures} src="/check-circle.svg" />
                    <p className={styles.descListFeatures}>Supercharged VPN.</p>
                 </li>
                 <li>
                    <img className={styles.imageFeatures} src="/check-circle.svg" />
                    <p className={styles.descListFeatures}>No specific time limits.</p>
                 </li>
              </div>
           </div>
        </div>
     </section>
    );
}

export default Information; 