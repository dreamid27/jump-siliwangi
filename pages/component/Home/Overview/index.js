import styles from './Overview.module.css'
import illustration from '@public/illustration2.png'
import bg1 from '@public/bgoverview1.png'
import bg2 from '@public/bgoverview2.png'

function Overview() {
    return(
        <div className={styles.overviewContainer}>
            <div className={styles.overviewImg}>
                <img src={illustration}></img>
            </div>
            <div className={styles.overviewDesc}>
                <h1>
                    <span>What Is Covid-19</span>Coronavirus
                </h1>
                <p>
                    Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response
                </p>
                <button className={styles.btnDesc}>Learn More</button>
            </div>
            <div><img className={styles.bgFirst} src={bg1}></img></div>
            <div><img className={styles.bgSecond} src={bg2}></img></div>
        </div>
    )
}

export default Overview;