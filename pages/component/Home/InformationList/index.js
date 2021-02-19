import Illustration2 from '@public/illustration2.png';
import styles from './Information.module.css';

const InformationList = () => <div className={styles.informationContainer}>
    <img src={Illustration2} alt="provide better" />
    <div className={styles.descriptionContainer}>
        <h3>We Provide Many Features You Can Use</h3>
        <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
        <ul>
            <li>
            Powerfull online protection.
            </li>
            <li>
            Internet without borders.
            </li>
            <li>
            Supercharged VPN
            </li>
            <li>
            No specific time limits.
            </li>
        </ul>
    </div>
</div>

export default InformationList;