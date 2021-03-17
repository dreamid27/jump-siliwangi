import styles from './Symtomps.module.css';
import symptomps from '@public/symptomps.png';
import bg from '@public/symbg.png';
import bg2 from '@public/symbg2.png'

function Symtomps() {
    return(
        <div className={styles.symtompsContainer}>
            <div>
                <h1>
                    <span>
                    Covid-19
                    </span>
                    Symptomps
                </h1>
                <p>
                Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory 
                </p>
            </div>
            <div className={styles.imgWrap}>
                <img src={symptomps}></img>
            </div>
            <img className={styles.bg1} src={bg}></img>
            <img className={styles.bg2} src={bg2}></img>
        </div>
    )
}

export default Symtomps;