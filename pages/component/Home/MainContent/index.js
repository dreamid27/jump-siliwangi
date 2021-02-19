import illustrationImage from '@public/illustration1.png';
import styles from './MainContent.module.css';

const MainContent = () => {
    return <div className={styles.mainContainer}>
        <div className={styles.descriptionContainer}>
            <h2>
                Want anything to be easy with <b>LaslesVPN</b>.
            </h2>
            <p>
                Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
            </p>
            <div>
                <a className={styles.actionButton} href="#">
                    Get Started
                </a>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <img src={illustrationImage} alt="Illustration" />
        </div>
    </div>
}

export default MainContent