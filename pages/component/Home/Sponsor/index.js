import styles from './Sponsor.module.css'

function Sponsor() {
    return (
        <div className={styles.Wrap}>
            <h1>
                Huge Global Network of Fast VPN
            </h1>
            <p>
                See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.
            </p>
            <img className={styles.imgGlobal} src="/hugeglobal.svg"></img>
            <div className={styles.sponsored}>
                <div className={styles.netflix}></div>
                <div className={styles.reddit}></div>
                <div className={styles.amazon}></div>
                <div className={styles.discord}></div>
                <div className={styles.spotify}></div>
            </div>
        </div>
    );
}

export default Sponsor;