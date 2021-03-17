import styles from './Header.module.css'
import illustration from '@public/illustration1.png'

function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerDesc}>
                <h1>
                    <span>COVID-19 Alert</span>Stay At Home Quarantine To Stop Corona Virus
                </h1>
                <p>
                    There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to .
                </p>
                <button className={styles.btnDesc}>Let Us Help</button>
            </div>
            <div className={styles.headerImg}>
                <img src={illustration}></img>
            </div>
        </div>
    )
}

export default Header;