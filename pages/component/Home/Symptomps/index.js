import styles from './Symtomps.module.css';
import symptomps from '@public/symptomps.png';
import background from '@public/symbg.png';
import background2 from '@public/symbg2.png'

function Symtomps() {
    return(
        <div className={styles.symtompsContainer} id="Symptoms">
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
            <img className={styles.background} src={background}></img>
            <img className={styles.background2} src={background2}></img>
        </div>
    )
}

export default Symtomps;